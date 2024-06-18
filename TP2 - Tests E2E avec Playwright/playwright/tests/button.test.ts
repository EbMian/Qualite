import { test, expect } from '@playwright/test';

test("Test screenshot", async ({page}) => {
    await page.goto('http://localhost:8000/button.html');
    await expect(page).toHaveScreenshot('button.png');
});