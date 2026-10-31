# Project intake automation
#
# This bot scans the repo, extracts any .zip files, and writes a JSON manifest with
# file metadata to `automation_output/project_manifest.json`.
#
# How to run locally:
#   python scripts/project_intake.py --root .
#
# The generated artifact can be used to inspect the real project files, archive
# contents, and repo structure before conversion into a real app.
