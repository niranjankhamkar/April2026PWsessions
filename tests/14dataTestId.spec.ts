
import { Browser, BrowserContext, Page, chromium, expect, firefox, selectors, test, webkit } from '@playwright/test';

test('data test id locator test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');
    //data-testid="username-input"
    await page.getByTestId('username-input').fill('naveen automation labs');
    await page.getByTestId('email-input').fill('test@gmail.com');
    await page.pause();

    //data-test-id="EMAIL"//This type is not allowed Only data-testid is allowed
    //if not allowed you can configure it from config file-use- 
    // testIdAttribute : 'data-test-id' ,
    // testIdAttribute : 'id'
    selectors.setTestIdAttribute('id');// insted of config file you can apply from here by 
    //using selectors.setTestIdAttribute method
    await page.goto('https://app.hubspot.com/signup-hubspot/crm?step=landing_page');
    await page.getByTestId('FormControl1').fill('naven@hub.com');

    await page.pause();
});