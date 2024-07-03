import {Browser, Locator, Page, test,} from '@playwright/test';
import { chromium } from '@playwright/test';
import path from 'path';
import { NavigationPage } from '../page-object/navigationPage';
import { PageManager } from '../page-object/pageManger';



test.beforeEach(async({page})=>{
    await page.goto('https://demo.guru99.com/test');
    await page.setDefaultTimeout(5000);    

})

test("test1", async({page})=>{
   const pm=new PageManager(page)
   await pm.navigationPage.navigateToTablemenu();  

})

test("test2", async({page})=>{ 
      
    const pm=new PageManager(page)
   // const navigationPage=new NavigationPage(page)
    await pm.navigationPage.navigateToTablemenu();
    //await navigationPage.navigateTo("Selenium","Accessing Link") 
})

test.afterEach(async({page})=>{
    page.close();
})