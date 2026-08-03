import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const pageUrl = pathToFileURL(resolve(here, "Prototype A - Horizontal Org Chart.html")).href;
const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const profilePath = await mkdtemp(resolve(tmpdir(), "h3g-org-chart-"));
const port = 9300 + Math.floor(Math.random() * 500);
let socket;
let call;

const browser = spawn(edgePath, [
  "--headless=new",
  "--disable-gpu",
  "--no-first-run",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profilePath}`,
  "--allow-file-access-from-files",
  "--window-size=1600,1000",
  pageUrl
], { stdio: "ignore" });

async function waitForPage() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const targets = await fetch(`http://127.0.0.1:${port}/json/list`).then(response => response.json());
      const page = targets.find(target => target.type === "page" && target.url.startsWith("file:"));
      if (page) return page;
    } catch {}
    await new Promise(resolveWait => setTimeout(resolveWait, 100));
  }
  throw new Error("Edge page did not become available");
}

function connect(url) {
  return new Promise((resolveSocket, reject) => {
    const ws = new WebSocket(url);
    ws.addEventListener("open", () => resolveSocket(ws), { once: true });
    ws.addEventListener("error", reject, { once: true });
  });
}

function createClient(ws) {
  let nextId = 1;
  const pending = new Map();
  ws.addEventListener("message", event => {
    const message = JSON.parse(event.data);
    if (!message.id || !pending.has(message.id)) return;
    const { resolve: resolveCall, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolveCall(message.result);
  });
  return (method, params = {}) => new Promise((resolveCall, reject) => {
    const id = nextId++;
    pending.set(id, { resolve: resolveCall, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

try {
  const page = await waitForPage();
  socket = await connect(page.webSocketDebuggerUrl);
  call = createClient(socket);
  await call("Runtime.enable");
  await new Promise(resolveWait => setTimeout(resolveWait, 300));
  const result = await call("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => {
      const nodes = Object.fromEntries([...document.querySelectorAll("[data-person-id]")].map(node => {
        const rect = node.getBoundingClientRect();
        return [node.dataset.personId, {
          x: Math.round(rect.left),
          y: Math.round(rect.top),
          role: node.dataset.orgRole || "",
          influence: node.dataset.influence || ""
        }];
      }));
      const edges = [...document.querySelectorAll("#connectors path")].map(path =>
        path.dataset.from + ">" + path.dataset.to + ":" + path.dataset.type
      );
      return { nodes, edges };
    })()`
  });
  const { nodes, edges } = result.result.value;
  assert.equal(Object.keys(nodes).length, 9, "all eight clients and the group anchor must render");
  assert.ok(Math.abs(nodes.joe.x - nodes.francesco.x) <= 2, "Joe and Francesco must be on the same organisational level");
  assert.equal(nodes.francesco.influence, "primary", "Francesco must carry the stronger IOD influence treatment");
  assert.equal(nodes.joe.influence, "secondary", "Joe must carry the lower-influence IOD treatment");
  assert.ok(Math.abs(nodes.mark.x - nodes.manjit.x) <= 2, "Mark and Manjit must be on the same organisational level");
  assert.equal(nodes.valentina.role, "secretary", "Valentina must be presented as Francesco's secretary");
  assert.ok(!edges.some(edge => edge.startsWith("joe>francesco:")), "Joe must not be shown as Francesco's manager");
  assert.ok(edges.includes("francesco>valentina:support"), "Valentina must have a support relationship to Francesco");
  console.log("PASS: H3G hierarchy matches the confirmed peer levels, influence, and secretary relationship.");
} finally {
  try { if (call) await call("Browser.close"); } catch {}
  await new Promise(resolveWait => setTimeout(resolveWait, 400));
  if (socket?.readyState === WebSocket.OPEN) socket.close();
  if (!browser.killed) browser.kill();
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      await rm(profilePath, { recursive: true, force: true });
      break;
    } catch (error) {
      if (attempt === 4) console.warn(`Temporary browser profile cleanup deferred: ${error.code}`);
      else await new Promise(resolveWait => setTimeout(resolveWait, 200));
    }
  }
}
