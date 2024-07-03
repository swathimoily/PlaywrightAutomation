import {test,Browser,Page,Locator, chromium} from '@playwright/test';
import { ChromiumBrowser } from '@playwright/test';

test("locators",async()=>{

    const browser:Browser=await chromium.launch({headless:false});
    const page:Page=await browser.newPage();
    await page.goto("http://localhost:8081/myhtml.html");

    await page.getByTestId("username").fill("swathi1@gmail.com");
    await page.getByTestId("password").fill("paa");

    await new Promise(()=>{});

});