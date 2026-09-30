import test from "@playwright/test";


test('locators statergy', async ({page})  => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

    let emailID = page.getByRole('textbox', {name:'E-Mail Address'});
    await emailID.fill('niranjan@ymail.com');

    await page.getByRole('textbox',{name : 'Password'}).fill('niranjank');

    page.getByRole('button', {name : 'Login'}).click();

    await page.waitForTimeout(5000);


});
