import {test, expect, Browser,Page, Locator, BrowserContext } from "@playwright/test";
import { chromium } from "@playwright/test";
//import test from "node:test";

test.use({actionTimeout:10000});

test("login test",async()=>{
     const browser:Browser= await chromium.launch({headless:false});
     const bc1:BrowserContext=await browser.newContext();
     const page1:Page=await bc1.newPage();
     await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

     const email:Locator=await page1.locator('#input-email');
     const pass:Locator=await page1.locator("#input-password");
     const login:Locator=await page1.locator("[value='Login']");

     await email.focus();
     await page1.waitForTimeout(5000);
     await email.fill("swathi1@gmail.com");
     await pass.fill("swathi123");
     await login.click();

     // const title=await page1.title();
     // console.log(title);
     // await page1.screenshot({path:'homepage.png'});     
     // expect(title).toEqual("My Account");
     // await browser.close();   
     
     const bc2:BrowserContext=await browser.newContext();
     const page2:Page=await bc2.newPage();
     await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

     const email1:Locator=await page2.locator('#input-email');
     const pass1:Locator=await page2.locator("#input-password");
     const login1:Locator=await page2.locator("[value='Login']");

     //await email1.fill("swathi11@gmail.com");
     await email1.pressSequentially("swathi",{delay:500});
     await pass1.fill("swathi11");
     await login1.click();

     await bc1.close();
     await bc2.close();

     await browser.close();

     //let i=10;
})