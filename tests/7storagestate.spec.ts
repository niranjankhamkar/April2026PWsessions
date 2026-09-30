

import { Browser, BrowserContext, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

test.use({ storageState: './opencartstate.json' }); //call from here

test('launch cart page test without login', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');
    await page.pause();
    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/account');
    await page.pause();
});
