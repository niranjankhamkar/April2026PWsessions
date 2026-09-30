import { Browser, Page, chromium, firefox, test, webkit } from '@playwright/test';

test.skip('title test', async ({ page }) => {
    await page.goto('https://www.google.com');
    let title = await page.title();
    console.log('title is:', title);
    let appUrl = page.url();
    console.log('app url:', appUrl);
});

test.skip('multiple browser test', async () => {

    // let browser: Browser = await chromium.launch({ headless: false });//CFT
    // let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let browser: Browser = await chromium.launch({ headless: false, channel: 'msedge' });

    //let browser: Browser = await chromium.launch({ headless: false, executablePath: '/Applications/Opera.app/Contents/MacOS/Opera' });
    //let browser: Browser = await chromium.launch({ headless: false, executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' });

    //let browser: Browser = await firefox.launch({ headless: false });
    
    //nightly builty open
    //let browser: Browser = await firefox.launch({ headless: false, channel: 'firefox' }); 

    //we can not use safari in windwos machine
    // let browser: Browser = await webkit.launch({ headless: false });

    let page: Page = await browser.newPage();
    await page.goto('https://www.google.com');
    let title = await page.title();
    console.log('title is:', title);
    let appUrl = page.url();
    console.log('app url:', appUrl);

    // await page.pause();
});