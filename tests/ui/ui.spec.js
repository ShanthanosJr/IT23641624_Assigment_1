const { test, expect } = require('@playwright/test');

test.describe('UI Functional Tests', () => {
    test('Pos_UI_0001 - Real-time update character by character', async ({ page }) => {
        await page.goto('https://www.pixelssuite.com/chat-translator');
        const inputSelector = 'textarea[placeholder*="Singlish"]';
        const outputSelector = 'div.bg-slate-50';

        // Type 'a'
        await page.locator(inputSelector).pressSequentially('a', { delay: 100 });
        await page.waitForTimeout(500);
        const output1 = await page.locator(outputSelector).textContent();
        console.log(`Typed "a" -> Output: "${output1.trim()}"`);

        // Type 'm' -> 'am'
        await page.locator(inputSelector).pressSequentially('m', { delay: 100 });
        await page.waitForTimeout(500);
        const output2 = await page.locator(outputSelector).textContent();
        console.log(`Typed "am" -> Output: "${output2.trim()}"`);

        // Type 'm' -> 'amm'
        await page.locator(inputSelector).pressSequentially('m', { delay: 100 });
        await page.waitForTimeout(500);
        const output3 = await page.locator(outputSelector).textContent();
        console.log(`Typed "amm" -> Output: "${output3.trim()}"`);

        // Type 'a' -> 'amma'
        await page.locator(inputSelector).pressSequentially('a', { delay: 100 });
        await page.waitForTimeout(500);
        const output4 = await page.locator(outputSelector).textContent();
        console.log(`Typed "amma" -> Output: "${output4.trim()}"`);

        // Type 'a' -> 'ammaa'
        await page.locator(inputSelector).pressSequentially('a', { delay: 100 });
        await page.waitForTimeout(1000); // Final wait
        const output5 = await page.locator(outputSelector).textContent();
        console.log(`Typed "ammaa" -> Output: "${output5.trim()}"`);

        expect(output5.trim()).toBe('අම්මා');
    });
});
