"""Behavior tests for the location-independent CV renderer."""

from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path
import unittest


MODULE_PATH = Path(__file__).with_name("render_cv.py")
SPEC = spec_from_file_location("render_cv", MODULE_PATH)
MODULE = module_from_spec(SPEC)
assert SPEC and SPEC.loader
SPEC.loader.exec_module(MODULE)


class ResolvePathsTests(unittest.TestCase):
    def test_relative_context_defaults_output_next_to_context(self) -> None:
        tmp_path = Path(self.temp_dir.name)
        context = tmp_path / "Companies" / "Jamf \u2014 Sales Engineer EMEIA" / "CV" / "CV Context.json"
        context.parent.mkdir(parents=True)
        context.write_text("{}", encoding="utf-8")

        resolved_context, resolved_output = MODULE.resolve_paths(
            str(context.relative_to(tmp_path)), None, cwd=tmp_path
        )

        self.assertEqual(resolved_context, context.resolve())
        self.assertEqual(
            resolved_output,
            context.parent.resolve() / "Kessog Chan CV \u2014 CV Context.docx",
        )

    def test_relative_output_resolves_from_working_directory(self) -> None:
        tmp_path = Path(self.temp_dir.name)
        context = tmp_path / "context.json"
        context.write_text("{}", encoding="utf-8")

        _, resolved_output = MODULE.resolve_paths(
            "context.json", "outputs/cv.docx", cwd=tmp_path
        )

        self.assertEqual(
            resolved_output,
            (tmp_path / "outputs" / "cv.docx").resolve(),
        )

    def setUp(self) -> None:
        import tempfile

        self.temp_dir = tempfile.TemporaryDirectory()

    def tearDown(self) -> None:
        self.temp_dir.cleanup()


if __name__ == "__main__":
    unittest.main()
