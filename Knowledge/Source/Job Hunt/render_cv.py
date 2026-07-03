"""Render a CV from Resume_Template.docx + a role-specific context JSON.

Usage:
    python render_cv.py "CV Context — TripBiz Senior PM EMEA.json" "output.docx"

The template uses docxtpl (Jinja2) tags: {{ profile_summary }},
{%p for job in experience %} ... etc. Context JSON keys must match.
"""
import json
import sys
from pathlib import Path

from docxtpl import DocxTemplate

HERE = Path(__file__).parent
TEMPLATE = HERE / "Resume_Template.docx"


def main() -> None:
    context_path = Path(sys.argv[1]) if len(sys.argv) > 1 else None
    out_path = Path(sys.argv[2]) if len(sys.argv) > 2 else None
    if not context_path or not context_path.is_absolute():
        context_path = HERE / (context_path or "CV Context — TripBiz Senior PM EMEA.json")
    if not out_path:
        out_path = HERE / f"Kessog Chan CV — {context_path.stem.replace('CV Context — ', '')}.docx"
    elif not out_path.is_absolute():
        out_path = HERE / out_path

    context = json.loads(context_path.read_text(encoding="utf-8"))
    doc = DocxTemplate(str(TEMPLATE))
    doc.render(context, autoescape=True)
    doc.save(str(out_path))
    print(f"Rendered: {out_path}")


if __name__ == "__main__":
    main()
