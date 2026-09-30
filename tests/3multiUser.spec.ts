
import { test, expect, BrowserContext, Page } from '@playwright/test';

test.skip('multi user test', async ({ browser }) => {
    let ctx1: BrowserContext = await browser.newContext();//window1
    let ctx2: BrowserContext = await browser.newContext();//window2

    let page1: Page = await ctx1.newPage();
    let page2: Page = await ctx2.newPage();

    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page1.locator('#input-email').fill('manish.wilson561@test.com');
    await page1.locator('#input-password').fill('pw123');
    await page1.locator('//input[@value="Login"]').click();

    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page2.locator('#input-email').fill('sasmita.brown419@test.com');
    await page2.locator('#input-password').fill('pw123');
    await page2.locator('//input[@value="Login"]').click();

    await page1.pause();
    await page2.pause();

    // await page1.close();
    // await page2.close();

    // await browser.close();
});
//====================================================


//Assignment
test.skip('three winddow checking',async({browser})=>{
    let btx1 : BrowserContext = await browser.newContext();
    let btx2 : BrowserContext = await browser.newContext();
    let btx3 : BrowserContext = await browser.newContext();

    let pg1 : Page = await btx1.newPage();
    let pg2 : Page = await btx2.newPage();
    let pg3 : Page = await btx3.newPage();
    
    await pg1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await pg1.locator('#input-email').fill('niranjan@ymail.com');
    await pg1.locator('#input-password').fill('niranjank')
    await pg1.locator('input[value="Login"]').click();

    await pg2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await pg2.locator('#input-email').fill('ansh@ymail.com');
    await pg2.locator('#input-password').fill('anshk')
    await pg2.locator('input[value="Login"]').click();

    await pg3.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');    
    await pg3.locator('#input-email').fill('shweta@ymail.com');
    await pg3.locator('#input-password').fill('shwetak')
    await pg3.locator('input[value="Login"]').click();
});






