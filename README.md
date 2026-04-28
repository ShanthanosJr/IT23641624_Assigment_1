# IT23641624 — ITPM Assignment 1

## Overview

This repository contains a Python Playwright automation test suite for testing the **Singlish-to-Sinhala transliteration accuracy** of [https://www.pixelssuite.com/chat-translator](https://www.pixelssuite.com/chat-translator).

The suite covers **50 negative test cases** (Neg_0001 to Neg_0050), spanning all **24 Singlish input types** from Appendix 1 of the assignment specification, with a minimum of 2 test cases per input type.

## Prerequisites

- Python 3.11 or 3.12
- Google Chrome (recommended)

## Installation (one-time setup)

```bash
pip install -U pip
pip install playwright openpyxl
playwright install
```

## Running the Tests

Navigate to the `test_automation` folder, then run:

```bash
cd test_automation
python test_automation.py --excel "Assignment 1 - Test cases.xlsx" --url "https://www.pixelssuite.com/chat-translator" --wait-ms 5000 --type-delay-ms 80 --slow-mo-ms 200 --save-every 1 --keep-open
```

## Project Structure

```
IT23641624_ITPM_Assignment_1/
├── test_automation/
│   ├── test_automation.py              ← Python Playwright automation script
│   └── Assignment 1 - Test cases.xlsx ← Excel test case file (live working copy)
├── IT23641624_files/
│   └── Assignment 1 - Test cases.xlsx ← Final completed copy for submission
├── README.md
├── repo-link.txt
└── .gitignore
```

## Test Cases

| Field | Details |
|---|---|
| Total test cases | 50 negative test cases |
| Test case IDs | Neg_0001 to Neg_0050 |
| Input types covered | All 24 Singlish input types (min. 2 per type) |
| Target application | https://www.pixelssuite.com/chat-translator |

**Excel columns:**

| Col | Name |
|---|---|
| A | TC ID |
| B | Input length type |
| C | Input |
| D | Expected output |
| E | Actual output |
| F | Status |
| G | Singlish input types covered |
| H | Evidence or rationale |

## Submission Info

| Field | Value |
|---|---|
| Registration Number | IT23641624 |
| Module | IT3040 ITPM |
| Year / Semester | Year 3, Semester 1 |
| GitHub Repo | https://github.com/ShanthanosJr/IT23641624_ITPM_Assignment_1 |

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

> **Property of IT23641624**
> This codebase, including all test scripts and documentation, is the intellectual property of IT23641624. Use of this repository is subject to academic integrity guidelines of the institute.
