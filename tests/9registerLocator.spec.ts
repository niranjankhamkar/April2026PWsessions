import { test, expect, Locator } from '@playwright/test';

test('locators test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //await page.getByRole('textbox', { name: 'Password'}).fill('test@123');
    //Not wroking because of 2 locator found

    await page.getByRole('textbox', { name: '* Password', exact: true }).fill('test@123');
    // await page.getByRole('textbox').last().click();

    await page.waitForTimeout(2000);
});

test('locators test2', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByRole('link', { name: 'Forgotten Password' }).last().click();
    // await page.getByRole('link', { name: 'Forgotten Password' }).first().click();
    // await page.getByRole('link', { name: 'Forgotten Password' }).nth(0).click();
    // await page.getByRole('link', { name: 'Forgotten Password' }).nth(1).click();
    await page.waitForTimeout(2000);
});

