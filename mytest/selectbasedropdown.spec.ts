import {Browser, Locator, Page, test,} from '@playwright/test';
import { chromium } from '@playwright/test';
import path from 'path';

test("chaining locators", async()=>{
    const browser:Browser=await chromium.launch({headless:false});
    const page: Page=await browser.newPage();

    await page.goto('https://www.magupdate.co.uk/reader-enquiry/PATI/174');
    //await page.selectOption('select#Contact_CountryCode',{value:'AL'});
    //await page.selectOption('select#Contact_CountryCode',{label:'Albania'});
    await page.selectOption('select#Contact_CountryCode',{index:5});
   // page.getByAltText('t').hover();

    const all=await page.$$('select#Contact_CountryCode > option');

    for(const c of all){

        const text=await c.textContent();
        console.log(c);
        if(text=='India')
        {
            await page.selectOption('select#Contact_CountryCode',{label:'India'});
            break;
        }
        
    }

    await new Promise(()=>{});

})