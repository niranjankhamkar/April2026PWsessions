


import { Page, chromium, expect, firefox, selectors, test, webkit } from '@playwright/test';

// test.use({
//     viewport: { width: 440, height: 956 }
// });

test('expect assertion test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.pause();

});


test('my assertion test', async ({ page }) => {

    page.setViewportSize({ width: 1200, height: 600 });

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');


    //Not WORK
    // await page.bringToFront();
    // await page.click('body');

    // await page.keyboard.press('ControlOrMeta+-');
    // await page.waitForTimeout(2000);

    // await page.keyboard.press('ControlOrMeta+-');
    // await page.waitForTimeout(2000);

    // await page.keyboard.press('ControlOrMeta+Minus');
    // await page.waitForTimeout(2000);

    await page.pause();

});