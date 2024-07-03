import {Browser, Locator, Page, test,} from '@playwright/test';
import { chromium } from '@playwright/test';

test("chaining locators", async()=>{
    const browser:Browser=await chromium.launch({headless:false});
    const page: Page=await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.locator('form >> input#input-email').fill('swathi2@gmail.com');
    await page.locator('form').getByRole('link',{name:'Forgotten Password'}).click();
     //const login1:Locator=await page.locator("[value='Login']");

    await new Promise(()=>{});     

})