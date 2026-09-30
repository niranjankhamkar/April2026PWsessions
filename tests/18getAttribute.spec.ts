
import { test } from '@playwright/test';

test('get the attribute of any element test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let placeholderVal = await page.getByRole('textbox', { name: 'First Name' }).getAttribute('placeholder');
    console.log(placeholderVal);    //First Name

    //to fetch the text then use textContent method.

    let hrefVal = await page.getByRole('link', { name: 'Forgotten Password' }).getAttribute('href');
    console.log(hrefVal);//https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten

    console.log('-------------');

    await page.getByRole('textbox', { name: 'First Name' }).fill('Naveen Automation Labs');
    let newVal = await page.getByRole('textbox', { name: 'First Name' }).getAttribute('value');
    console.log("newVal is : " + newVal);   //Not working so use inputValue() method

    let newVal2 = await page.getByRole('textbox', { name: 'First Name' }).inputValue();
    console.log("newVal2 is : " + newVal2);
});