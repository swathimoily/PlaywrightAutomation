import {test,Browser,Page,Locator, chromium, BrowserContext} from '@playwright/test';
import { ChromiumBrowser } from '@playwright/test';

test("locators",async()=>{

    //const browser:Browser=await chromium.launch({headless:false});
    //const page:Page=await browser.newPage();

    const browser:BrowserContext=await chromium.launchPersistentContext('',{headless:false});
    const pages=browser.pages();
    const page:Page=pages[0];
    
    await page.goto("http://localhost:8081/myhtml.html");

   // await page.getByRole('textbox',{name:'Username'}).fill("swathi1@gmail.com");
    await page.getByRole('button',{name:'Login'}).click();

    await new Promise(()=>{});
});