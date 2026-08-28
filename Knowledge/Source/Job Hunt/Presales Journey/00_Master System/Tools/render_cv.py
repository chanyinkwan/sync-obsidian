"""Render a role-specific CV from a context JSON and the shared template."""

import json
import sys
from pathlib import Path

from docxtpl import DocxTemplate


HERE = Path(__file__).resolve().parent
SYSTEM_ROOT = HERE.parent
TEMPLATE = SYSTEM_ROOT / "Templates" / "Resume_Template.docx"

# The template may only receive these keys. _targeting and every other
# working-note field stay out of the Jinja context so they cannot print.
PRINTABLE_KEYS = (
    "profile_summary",
    "experience",
    "activity_line",
    "language_line",
    "skills_line",
    "interests_line",
)

PRIVATE_TARGETING_FIELDS = (
    "gap_bridge",
    "killed",
    "notes",
    "review_fixes",
    "jd",
    "criteria",
    "anchor_role",
    "bullets_used",
)


def resolve_paths(
    context_arg: str | None,
    output_arg: str | None,
    cwd: Path | None = None,
) -> tuple[Path, Path]:
    if not context_arg:
        raise ValueError("Pass a CV Context JSON path.")

    base = (cwd or Path.cwd()).resolve()
    context_path = Path(context_arg)
    if not context_path.is_absolute():
        context_path = base / context_path
    context_path = context_path.resolve()

    if output_arg:
        output_path = Path(output_arg)
        if not output_path.is_absolute():
            output_path = base / output_path
        output_path = output_path.resolve()
    else:
        role_name = context_path.stem.replace("CV Context — ", "")
        output_path = context_path.parent / f"Kessog Chan CV — {role_name}.docx"

    return context_path, output_path


def printable_context(context: dict) -> dict:
    """Return only the fields the Word template is allowed to print.

    Never concatenates _targeting.gap_bridge, killed, notes, review_fixes,
    or any other private targeting field into profile_summary. The summary
    is used as authored in the context JSON, unchanged.
    """
    if not isinstance(context, dict):
        raise TypeError("CV context must be a JSON object.")

    render = {}
    for key in PRINTABLE_KEYS:
        render[key] = context.get(key, "" if key != "experience" else [])

    summary = render.get("profile_summary") or ""
    targeting = context.get("_targeting") or {}
    if isinstance(targeting, dict):
        for key in PRIVATE_TARGETING_FIELDS:
            value = targeting.get(key)
            if isinstance(value, str):
                fragment = value.strip()
                if len(fragment) >= 24 and fragment in summary:
                    raise ValueError(
                        f"_targeting.{key} leaked into profile_summary. "
                        "Private targeting fields must never print."
                    )
    return render


def main() -> None:
    context_arg = sys.argv[1] if len(sys.argv) > 1 else None
    output_arg = sys.argv[2] if len(sys.argv) > 2 else None
    context_path, output_path = resolve_paths(context_arg, output_arg)

    if not TEMPLATE.exists():
        raise FileNotFoundError(f"CV template not found: {TEMPLATE}")
    if not context_path.exists():
        raise FileNotFoundError(f"CV Context not found: {context_path}")

    context = json.loads(context_path.read_text(encoding="utf-8"))
    output_path.parent.mkdir(parents=True, exist_ok=True)
    document = DocxTemplate(str(TEMPLATE))
    document.render(printable_context(context), autoescape=True)
    document.save(str(output_path))
    print(f"Rendered: {output_path}")


if __name__ == "__main__":
    main()
