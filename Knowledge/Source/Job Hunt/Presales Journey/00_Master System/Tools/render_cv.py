"""Render a role-specific CV from a context JSON and the shared template."""

import json
import sys
from pathlib import Path

from docxtpl import DocxTemplate


HERE = Path(__file__).resolve().parent
SYSTEM_ROOT = HERE.parent
TEMPLATE = SYSTEM_ROOT / "Templates" / "Resume_Template.docx"


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
    document.render(context, autoescape=True)
    document.save(str(output_path))
    print(f"Rendered: {output_path}")


if __name__ == "__main__":
    main()
