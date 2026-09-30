
import { test, expect, Locator, webkit } from '@playwright/test';

test('two window handle test', async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://orangehrm.com/contact-sales');
console.log('the parent window title before click: ', await page.title());


    let [childWindowPage] = await Promise.all([
        context.waitForEvent('page'), //start listening the page event in the browser
        page.getByRole('link', { name: 'About Us' }).click()//this will click on the link and generate a new page
    ]);

    await childWindowPage.waitForLoadState();//child window is loaded properly

    let allPages = context.pages();
    console.log('total number of pages: ', allPages.length); //2

    //await childWindowPage.bringToFront(); //visualize whats happening on the child window...

    console.log('the child window title: ', await childWindowPage.title());
    console.log('the child window header: ', await childWindowPage.getByRole('heading', { name: 'Our Leadership Team', level: 2 }).textContent());
    await childWindowPage.close();//close the child window

    console.log('the parent window title after child window close: ', await page.title());
    await page.pause();
});
