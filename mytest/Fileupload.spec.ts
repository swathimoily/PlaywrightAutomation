import {Browser, Locator, Page, test,} from '@playwright/test';
import { chromium } from '@playwright/test';
import path from 'path';

test("chaining locators", async()=>{
    const browser:Browser=await chromium.launch({headless:false});
    const page: Page=await browser.newPage();

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles([path.join("D:/2024/AutomationPlaywright/t1.txt"),path.join("D:/2024/AutomationPlaywright/t1.txt")]);
    await new Promise(()=>{});

})