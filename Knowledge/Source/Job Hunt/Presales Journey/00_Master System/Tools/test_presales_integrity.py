"""Static regression checks for the Presales evidence and workflow contracts."""

import json
from pathlib import Path
import re
import unittest


TOOLS_ROOT = Path(__file__).resolve().parent
MASTER_ROOT = TOOLS_ROOT.parent
PRESALES_ROOT = MASTER_ROOT.parent
JOB_HUNT_ROOT = PRESALES_ROOT.parent
REPO_ROOT = JOB_HUNT_ROOT.parents[2]

INTERVIEW_SKILL = REPO_ROOT / ".claude" / "skills" / "interview-prep" / "SKILL.md"
RESEARCH_SKILL = REPO_ROOT / ".claude" / "skills" / "research-baseline" / "SKILL.md"
CRAFT_CV_SKILL = REPO_ROOT / ".claude" / "skills" / "craft-cv" / "SKILL.md"

CANONICAL_COMPANY_ROOT = (
    "Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>"
)
CANONICAL_RENDERER = (
    "Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Tools/render_cv.py"
)


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def renderer_supplied_text(context: dict) -> str:
    """Return only fields supplied to the CV renderer, excluding targeting notes."""
    render_fields = {
        "profile_summary": context.get("profile_summary", ""),
        "experience": context.get("experience", []),
        "activity_line": context.get("activity_line", ""),
        "skills_line": context.get("skills_line", ""),
        "certifications": context.get("certifications", []),
        "certification_line": context.get("certification_line", ""),
    }
    return json.dumps(render_fields, ensure_ascii=False).casefold()


class EvidenceGateTests(unittest.TestCase):
    def test_active_contexts_do_not_render_known_unsupported_claims(self) -> None:
        canonical = read_text(MASTER_ROOT / "MasterExperienceDB.json").casefold()
        unsupported_if_absent_from_canonical = (
            "aws certified solutions architect",
            "google cloud (hands-on exposure)",
            "docker",
        )

        contexts = sorted((PRESALES_ROOT / "Companies").glob("*/CV/CV Context*.json"))
        self.assertGreater(len(contexts), 0)
        for context_path in contexts:
            rendered = renderer_supplied_text(
                json.loads(read_text(context_path))
            )
            for claim in unsupported_if_absent_from_canonical:
                if claim not in canonical:
                    with self.subTest(context=context_path.name, claim=claim):
                        self.assertNotIn(claim, rendered)

    def test_story_bank_has_enforceable_eligibility_statuses(self) -> None:
        story_bank = read_text(MASTER_ROOT / "Master Story Bank.md")
        blocks = {
            int(number): block
            for number, block in re.findall(
                r"^### Story (\d+).*?\n(.*?)(?=^### Story \d+|^---$|\Z)",
                story_bank,
                flags=re.MULTILINE | re.DOTALL,
            )
        }
        self.assertEqual(set(blocks), {1, 2, 3, 4, 5})
        expected = {
            1: "REVIEW_REQUIRED",
            2: "REVIEW_REQUIRED",
            3: "ELIGIBLE",
            4: "ELIGIBLE",
            5: "ELIGIBLE",
        }
        for story_number, status in expected.items():
            with self.subTest(story=story_number):
                self.assertRegex(
                    blocks[story_number],
                    rf"\*\*Evidence status:\*\* `{status}`",
                )

    def test_interview_prep_filters_story_use_by_status(self) -> None:
        skill = read_text(INTERVIEW_SKILL)
        self.assertIn(
            "Only stories marked `ELIGIBLE` may be selected, copied into interview artefacts, or drilled.",
            skill,
        )
        self.assertIn("`REVIEW_REQUIRED`", skill)


class OperationalPathTests(unittest.TestCase):
    def test_interview_prep_uses_exact_company_folder_model(self) -> None:
        skill = read_text(INTERVIEW_SKILL)
        self.assertIn(f"{CANONICAL_COMPANY_ROOT}/Role Brief.md", skill)
        self.assertIn(f"{CANONICAL_COMPANY_ROOT}/Research/", skill)
        self.assertIn(f"{CANONICAL_COMPANY_ROOT}/Interview/", skill)
        self.assertNotIn("<Company folder>", skill)

    def test_research_skill_uses_canonical_inputs_and_outputs(self) -> None:
        skill = read_text(RESEARCH_SKILL)
        self.assertIn(
            "Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Research Baseline.md",
            skill,
        )
        self.assertIn(f"{CANONICAL_COMPANY_ROOT}/Research/", skill)
        self.assertIn(
            "Knowledge/Source/Job Hunt/Presales Journey/01_Pipeline/Application Pipeline.md",
            skill,
        )
        self.assertNotIn("<Job Folder>", skill)
        self.assertNotIn("$Categories", skill)

    def test_cv_workflows_invoke_only_the_canonical_renderer(self) -> None:
        for path in (CRAFT_CV_SKILL, MASTER_ROOT / "CV Writing Rules.md"):
            text = read_text(path)
            with self.subTest(path=path.name):
                self.assertIn(CANONICAL_RENDERER, text)
                self.assertNotIn("python render_cv.py", text)

    def test_required_company_subdirectories_survive_clean_checkout(self) -> None:
        companies = sorted(
            role_brief.parent
            for role_brief in (PRESALES_ROOT / "Companies").glob("*/Role Brief.md")
        )
        self.assertGreater(len(companies), 0)
        for company in companies:
            for subdir_name in ("CV", "Research", "Interview"):
                subdir = company / subdir_name
                with self.subTest(company=company.name, subdir=subdir_name):
                    self.assertTrue(subdir.is_dir())
                    real_files = [
                        path for path in subdir.iterdir() if path.name != ".gitkeep"
                    ]
                    if not real_files:
                        self.assertTrue((subdir / ".gitkeep").is_file())



class EducationSourceTests(unittest.TestCase):
    def test_canonical_db_degrees(self) -> None:
        db = json.loads(read_text(MASTER_ROOT / "MasterExperienceDB.json"))
        hang_seng = [
            entry
            for entry in db["education"]
            if "Hang Seng" in entry["institution"]
        ]
        exeter = [
            entry
            for entry in db["education"]
            if "Exeter" in entry["institution"]
        ]
        self.assertEqual(hang_seng[0]["degree"], "BSc Information Technology")
        self.assertEqual(exeter[0]["degree"], "MSc Business Analytics")
        blob = json.dumps(db["education"], ensure_ascii=False)
        self.assertNotIn("Communication Technology", blob)

    def test_live_template_prints_canonical_degrees_only(self) -> None:
        import zipfile

        template = MASTER_ROOT / "Templates" / "Resume_Template.docx"
        with zipfile.ZipFile(template) as z:
            xml = z.read("word/document.xml").decode("utf-8")
        self.assertIn("BSc Information Technology", xml)
        self.assertIn("Master of Business Analytics", xml)
        self.assertIn("University of Exeter", xml)
        self.assertIn("Merit", xml)
        self.assertNotIn("Communication Technology", xml)
        self.assertNotIn("AI Governance", xml)
        self.assertNotIn("Relevant Coursework", xml)
        self.assertNotIn("gap_bridge", xml)
        self.assertNotIn("_targeting", xml)

    def test_job_hunt_template_copy_has_no_stale_degree(self) -> None:
        import zipfile

        template = JOB_HUNT_ROOT / "Resume_Template.docx"
        if not template.exists():
            self.skipTest("Job Hunt template copy missing")
        with zipfile.ZipFile(template) as z:
            xml = z.read("word/document.xml").decode("utf-8")
        self.assertIn("BSc Information Technology", xml)
        self.assertNotIn("Communication Technology", xml)
        self.assertNotIn("AI Governance", xml)
        self.assertNotIn("Relevant Coursework", xml)

    def test_craft_cv_skill_keeps_targeting_private(self) -> None:
        skill = read_text(CRAFT_CV_SKILL)
        self.assertIn("Private targeting fields never print.", skill)
        self.assertIn("BSc Information Technology", skill)
        self.assertIn("Bachelor of Communication Technology", skill)
        rules = read_text(MASTER_ROOT / "CV Writing Rules.md")
        self.assertIn("Private targeting fields never print.", rules)
        self.assertIn("BSc Information Technology", rules)


if __name__ == "__main__":
    unittest.main()
