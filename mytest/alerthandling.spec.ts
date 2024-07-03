import {Browser, Locator, test,} from '@playwright/test';
import { chromium } from '@playwright/test';

test("chaining locators", async({page})=>{
    await page.goto("http://127.0.0.1:8081/myhtml");

    console.log("testin");
    page.on('dialog', async dialog => {
        const msg = dialog.message();
        console.log(`Dialog message: ${msg}`);
        await dialog.accept();
      });

    //await page.getByText('Try it').hover();
    //await page.waitForTimeout(5000);
    await page.getByText('Try it').click();
    

   
   // await new Promise(()=>{});

})
