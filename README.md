# PixelsSuite Chat Translator — Playwright Test Suite
### IT3040 Assignment 1 · IT23641624

> **Automated Singlish → Sinhala transliteration testing** for [pixelssuite.com/chat-translator](https://www.pixelssuite.com/chat-translator)  
> Built with Python + Playwright · Results written directly to Excel

---

## 📋 Overview

This repository contains a **Python Playwright automation test suite** that exercises the Singlish-to-Sinhala transliteration feature of the PixelsSuite Chat Translator.

The suite covers **50 negative test cases** (`Neg_0001` → `Neg_0050`) spanning all **24 Singlish input types** defined in Appendix 1 of the assignment specification, with a minimum of 2 test cases per input type. Results (actual output + Pass/Fail status) are written back into the Excel test-case workbook automatically after every row.

---

## 🗂 Project Structure

```
pixelssuite-playwright/
├── test_automation/
│   ├── test_automation.py           ← Main Python automation script
│   └── Assignment 1 - Test cases.xlsx  ← Test case workbook (input + results)
├── tests/
│   ├── functional/
│   │   └── functional.spec.js       ← JS Playwright functional tests
│   ├── ui/
│   │   └── ui.spec.js               ← JS Playwright UI / real-time tests
│   └── test-data.js                 ← Test case data store
├── IT23641624_files/                ← Supporting assignment documents
├── playwright.config.js
├── package.json
├── repo-link.txt
├── LICENSE
└── README.md
```

---

## ⚙️ Prerequisites

| Requirement | Version |
|---|---|
| Python | **3.12** (via Homebrew) |
| pip / venv | bundled with Python 3.12 |
| Node.js | 18+ (only needed for the JS spec files) |
| macOS | Apple Silicon or Intel |

---

## 🚀 Quick Start (Python automation — recommended)

### Step 1 — Install Python 3.12

```bash
brew install python@3.12
```

> Already installed? Skip ahead.

### Step 2 — Create a virtual environment

```bash
cd test_automation
python3.12 -m venv .venv
source .venv/bin/activate
```

### Step 3 — Install dependencies

```bash
pip install -U pip playwright openpyxl
playwright install chromium
```

### Step 4 — Run the tests

```bash
python test_automation.py \
  --excel "Assignment 1 - Test cases.xlsx" \
  --url "https://www.pixelssuite.com/chat-translator" \
  --input-col "Input" \
  --expected-col "Expected output" \
  --actual-col "Actual output" \
  --status-col "Status" \
  --wait-ms 6000 \
  --type-delay-ms 100 \
  --slow-mo-ms 300 \
  --save-every 1 \
  --keep-open
```

The browser will open visibly. You will see the script type each Singlish phrase, capture the Sinhala output, and write **Actual output** + **PASS / FAIL** back into the Excel file — saved after every single row (`--save-every 1`).

---

## 🔧 CLI Options Reference

| Flag | Default | Description |
|---|---|---|
| `--excel` | `Assignment 1 - Test cases.xlsx` | Path to the Excel workbook |
| `--url` | PixelsSuite chat-translator URL | Target URL |
| `--input-col` | auto-detect | Header name of the Singlish input column |
| `--expected-col` | auto-detect | Header name of the expected output column |
| `--actual-col` | `Actual output` | Header name to write actual output into |
| `--status-col` | `Status` | Header name to write PASS/FAIL into |
| `--wait-ms` | `5000` | ms to wait after clicking Transliterate |
| `--type-delay-ms` | `30` | ms delay between keystrokes (0 = fill) |
| `--slow-mo-ms` | `0` | Playwright slow-motion delay |
| `--timeout-ms` | `60000` | Global Playwright action timeout |
| `--retries` | `8` | Retry attempts when output is empty |
| `--save-every` | `0` | Save workbook every N rows (0 = end only) |
| `--headless` | off | Run browser invisibly |
| `--keep-open` | off | Keep browser open after all rows finish |

---

## 🧪 Test Case Organization

| ID Format | Category |
|---|---|
| `Pos_Fun_xxxx` | Positive functional tests |
| `Neg_Fun_xxxx` | Negative functional tests |
| `Pos_UI_xxxx` | UI / real-time behavior tests |

Each test case records: **Input · Expected output · Actual output · Status · Justification**

---

## 📊 How Results Are Written

- **Actual output** — the raw Sinhala text captured from the translator
- **PASS** — actual output matches expected output exactly  
- **FAIL** — outputs do not match  
- **COLLECTED** — no expected output was provided; output is captured for manual review  
- **UI Error** — browser interaction failed for that row (saved immediately so no data is lost)

---

## 📁 Key Selectors (PixelsSuite Chat Translator)

| Element | Selector |
|---|---|
| Singlish input | `textarea[placeholder*="English"]` |
| Sinhala output | `textarea[placeholder*="Sinhala"]` |
| Transliterate button | `button[name="Transliterate"]` |

---

## 📌 Notes

- Tests run against the **live** application at `https://www.pixelssuite.com/chat-translator`
- A Transliterate button click is performed automatically before reading output
- The `--keep-open` flag keeps the browser alive so you can inspect results before the window closes
- If you see `TargetClosedError`, ensure you are using **Python 3.12** (not the system 3.9)

---

## 📝 Submission

| Field | Value |
|---|---|
| Module | IT3040 — IT Project Management |
| Assignment | Assignment 1 |
| Author | Ravishan R K |
| Registration Number | IT23641624 |
| Repository | https://github.com/ShanthanosJr/IT23641624_ITPM_Assignment_1 |
| Date | 2026 |

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

> **Property of IT23641624** · All test scripts and documentation are subject to academic integrity guidelines of the institute.
