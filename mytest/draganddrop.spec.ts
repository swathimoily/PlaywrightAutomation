import {Browser, Locator, Page, test,} from '@playwright/test';
import { chromium } from '@playwright/test';
import path from 'path';

test("chaining locators", async()=>{
    const browser:Browser=await chromium.launch({headless:false});
    const page: Page=await browser.newPage();

    await page.goto('https://demo.guru99.com/test/drag_drop.html');

    await page.locator('.block14').dragTo(page.locator('#shoppingCart1 .placeholder'));

    await new Promise(()=>{});
})