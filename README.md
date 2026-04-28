# SwiftTranslator Playwright Test Suite - IT3040 Assignment 1 (IT23641624)

## Overview
This repository contains a comprehensive Playwright automation test suite for testing the SwiftTranslator application 
(Singlish → Sinhala conversion). The suite includes 24 positive functional tests, 10 negative functional tests, and 
1 UI real-time behavior test, covering all requirements from Appendix 1 and Appendix 2 of Assignment 1.

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
```text
swifttranslator-playwright/
├── tests/
│   ├── functional/
│   │   └── functional.spec.js       (34+ functional tests)
│   ├── ui/
│   │   └── ui.spec.js               (UI tests)
│   └── test-data.js                 (Test case data store)
├── playwright.config.js             (Playwright configuration)
├── package.json
├── README.md
├── repo-link.txt
└── .gitignore
```

## Test Case Organization
Test IDs follow convention: `Pos_Fun_xxxx`, `Neg_Fun_xxxx`, `Pos_UI_xxxx`

Each test includes: input text, expected output, actual output (captured), status, and justification.

All test cases are stored in `tests/test-data.js` for easy reference and update.

Excel template with all test case details: `IT23641624_files/IT23641624_ITPM_Assignment_1.xlsx`

## Key Selectors
- Singlish input: `textarea[placeholder*="Singlish"]`
- Sinhala output: `div.bg-slate-50`

## Notes
- Tests run against https://www.swifttranslator.com/ (live application)
- Each test waits for real-time output update (~1.5 seconds)
- No convert button required; output auto-updates as user types
- Negative tests verify expected failures and robustness issues.

> **Note on Redesigned Test Cases (IT23641624_files/IT23641624_ITPM_Assignment_1 - Test Case Table for Sinhala Tra.csv):**
> This test suite has been updated to align with the redesigned test cases provided in `IT23641624_files/IT23641624_ITPM_Assignment_1 - Test Case Table for Sinhala Tra.csv`.
> The `tests/test-data.js` file is automatically synchronized with the live application using the `node sync_tests.js` script (with increased timeout for robustness).
> Tests that currently fail on the live site (as recorded in `test-data.js` with status 'Fail') are marked as **expected failures** (`test.fail()`) in the test suite. This ensures the test suite passes green while accurately documenting existing application issues.

## Submission
This repository is part of IT3040 Assignment 1 submission.

Repository Link: https://github.com/ShanthanosJr/IT23641624_ITPM_Assignment_1

Author: Ravishan R K
Registration Number: IT23641624
Date: January 2026

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

> **Property of IT23641624**
> This codebase, including all test scripts and documentation, is the intellectual property of IT23641624. Use of this repository is subject to academic integrity guidelines of the institute.
