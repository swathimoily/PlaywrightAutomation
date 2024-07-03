import {Browser, Locator, test,} from '@playwright/test';
import { chromium } from '@playwright/test';

test("chaining locators", async({page})=>{
    await page.goto("http://127.0.0.1:8081/mytable");

    const row=page.getByRole('row',{name:'USA'});

     console.log(await row.locator('td').first().textContent());

})