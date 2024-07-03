import {test, Browser, Locator, Page} from '@playwright/test'
import { chromium } from '@playwright/test'

test("authentication test", async()=>{
    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page=await browser.newPage();

   // await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');

   const auth='Basic '+btoa('admin:admin');
   await page.setExtraHTTPHeaders({Authorization:auth});

    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    await new Promise(()=>{});
    
})