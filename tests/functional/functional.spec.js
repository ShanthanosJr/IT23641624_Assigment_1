const { test, expect } = require('@playwright/test');
const testData = require('../test-data.js');

// Helper function 
async function translateAndGetOutput(page, inputText) {
    await page.goto('https://www.pixelssuite.com/chat-translator');
    const inputSelector = 'textarea[placeholder*="Singlish"]';
    const outputSelector = 'div.bg-slate-50';

    if (!inputText) {
        await page.locator(inputSelector).clear();
        await page.waitForTimeout(1000);
        return page.locator(outputSelector).textContent().then(t => t ? t.trim() : '');
    }

    await page.locator(inputSelector).fill(inputText);
    await page.waitForTimeout(4000);
    const actual = await page.locator(outputSelector).textContent();
    return actual ? actual.trim() : '';
}

// Positive Functional Tests
test.describe('Positive Functional Tests', () => {
    testData.positiveTests.forEach(({ id, name, input, expected, status }) => {
        test(`${id} - ${name}`, async ({ page }) => {
            if (status === 'Fail') {
                test.fail();
            }
            const actual = await translateAndGetOutput(page, input);
            console.log(`${id} Input: "${input}" → Actual: "${actual}"`);

            expect(actual).toBe(expected);
        });
    });
});

// Negative Functional Tests
test.describe('Negative Functional Tests', () => {
    testData.negativeTests.forEach(({ id, name, input, expected, status, actual: knownBadOutput }) => {
        test(`${id} - ${name}`, async ({ page }) => {
            if (status === 'Fail') {
                test.fail();
            }

            const actualOutput = await translateAndGetOutput(page, input);
            console.log(`${id} Input: "${input}" → Actual: "${actualOutput}" | Expected: "${expected}"`);

            expect(actualOutput).toBe(expected);
        });
    });
});
