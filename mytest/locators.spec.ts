import {test,Browser,Page,Locator, chromium} from '@playwright/test';
import { ChromiumBrowser } from '@playwright/test';

test("locators",async()=>{

    const browser:Browser=await chromium.launch({headless:false});
    const page:Page=await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    //id
    const email:Locator=page.locator('id=input-email');
    const pass:Locator=page.locator('css=input[name="password"]');
    
    //classname
    const btn:Locator=page.locator('[value="Login"]');

    await email.fill("swathi11@gmail.com");
    await pass.fill("swathi11");
    await btn.click();

    await new Promise(()=>{});

})