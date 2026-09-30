import test from "@playwright/test";

test('single selection select drop down test', async ({ page }) => {
    await page.goto('https://orangehrm.com/contact-sales');
    let selectValue = await page.getByRole('combobox', { name: 'Country' }).selectOption('India');
    console.log(selectValue);
    await page.waitForTimeout(2000);

    selectValue = await page.getByRole('combobox', { name: 'Country' }).selectOption({ label: 'Angola' });//Visible text
    console.log(selectValue);
    await page.waitForTimeout(2000);

    selectValue = await page.getByRole('combobox', { name: 'Country' }).selectOption({ value: 'Brazil' });//value attribute
    console.log(selectValue);
    await page.waitForTimeout(2000);

    selectValue = await page.getByRole('combobox', { name: 'Country' }).selectOption({ index: 1 });// using index base
    console.log(selectValue);
    await page.waitForTimeout(2000);

    let currentValue = await page.getByRole('combobox', { name: 'Country' }).inputValue();
    console.log(currentValue);
})


test('multi selection select drop down test', async ({ page }) => {
    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');
    //multiple attribute is present for select tag
    //Role : listBox

    let selectVal = await page.locator('[name = "Month"]').selectOption(["January", "May", "November"]);
    //Not work for Non select dropDown
    console.log(selectVal);
    await page.pause();

    // let selectVal = await page.locator('[name = "Month"]').selectOption(["January", "May", "April"]);
    // let addedVal = await page.locator('[name = "Month"]').inputValue(); //Not recomended here because it give 1st value only
    // console.log(addedVal);
    // await page.pause();
})

// ASSIGNMENT   Date & Time = PW11- 41:35
// https://www.facebook.com/reg/?entry_point=login&next FILL this form