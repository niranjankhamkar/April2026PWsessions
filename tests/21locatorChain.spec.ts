
import { test } from '@playwright/test';

// If you use open same url in code Then use this nise feature. create short cut
// package.json
// "scripts": {
//     "codegen" : "npx playwright codegen https://naveenautomationlabs.com/opencart/index.php?route=account/register"
//   }
//terminal > npm run codegen

test('chain locator test', async ({ page }) => {
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")

    //locator chain Parent -> child -> child
    //locator('form').getByRole('textbox',{name:'First Name'})
    //locator('#column-right').getByRole('link',{name:'Login'})

    //https://naveenautomationlabs.com/opencart/index.php?route=account/login
    //locator('form').getByRole('link',{name:'Forgotten Password'})

    await page
        .locator('form')
        .getByRole('textbox', { name: 'First Name' })
        .fill('Naveen Automation Lab');
    await page.waitForTimeout(10000);

    await page
        .locator('#column-right')
        .getByRole('link', { name: 'Forgotten Password' })
        .click();
    await page.pause();
})

test('webtable handling', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/');

    await page  //this is chaining
        .locator('#table01')
        .locator('tr')
        .filter({ hasText: 'GUI' }) // 'filter'method  on the basis of what 'hasText' properties
        .getByRole('checkbox')
        .click();
    await page.pause();

    await page
        .locator('#table01')
        .locator('tr')
        .filter({ hasText: 'GUI' })
        .getByRole('button', { name: 'Delete' })
        .click();
    await page.pause();

    let officeName = await page
        .locator('#table02')
        .locator('tr')
        .filter({ hasText: 'Ashton Cox' })
        .locator('td')
        .nth(2)
        .innerText();
    console.log(officeName);
    await page.pause();

    let colCount = await page.locator('#table02 tr th').count();//this is without chaining use direct css here
    console.log(colCount);

    let rowCount = await page.locator('#table02 tr').count() - 1;
    console.log(rowCount);

});

test('fetch data from webtable test', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/html_tables.asp');
    let fullData = await page.locator('table').first().locator('tr').allInnerTexts();
    for (let e of fullData) {
        console.log(e);
        console.log('==============');
    }
    await page.pause();
});

test('select all the checkboxes in webtable test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');
    let allCheckBoxes = await page.locator('table#resultTable tr td').getByRole('checkbox').all();

    // for(let e of allCheckBoxes){
    //     e.click();
    //     await page.waitForTimeout(1000);
    // }

    for (let i = 0; i < allCheckBoxes.length; i++) {
        allCheckBoxes[i].click();
        await page.waitForTimeout(1000);
    }
    await page.pause();
});

test('get data from cricInfo webtable test', async ({ page }) => {
    await page.goto('https://www.cricinfo.com/series/caribbean-premier-league-2026-1534175/antigua-and-barbuda-falcons-vs-st-lucia-kings-3rd-match-1534181/full-scorecard');

    let playerName = 'Ackeem Auguste';

    let wicketTakerName = await page.locator('table.ci-scorecard-table')
        .first().locator('tr')
        .filter({ hasText: `${playerName}` })
        .first()
        .locator('td')
        .nth(1)
        .locator('span span').innerText();
    console.log(wicketTakerName);
    console.log('==============');

    
    let playerScoreData = await page.locator('table.ci-scorecard-table')
        .first().locator('tr')
        .filter({ hasText: 'Ackeem Auguste' })
        .first()
        .locator('td').all();
    for (let e of playerScoreData) {
        let info = await e.textContent();
        console.log(info);
    }

    //Assignment supply blower name & then capture his score cards
    await page.pause();
});

