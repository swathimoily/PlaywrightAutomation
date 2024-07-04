import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";
import path from "path";

export class NavigationPage extends HelperBase{
    
    //readonly page:Page  
    readonly selenium:Locator 
    readonly tabledemo:Locator

    constructor(page:Page){
        //this.page=page
        super(page);
        this.selenium=this.page.locator("#navbar-brand-centered").getByRole("link",{name:"Selenium"});
        this.tabledemo=this.page.getByRole("link",{name:"Table Demo"})

    }

    private async navigateToSelenium() {
        await this.selenium.click();                 
    }

    async navigateToTablemenu()
    {
        await this.navigateToSelenium();
        await this.tabledemo.click();       
        await this.closeAd();
        //await this.navigateToSelenium();
    }

    private async closeAd() {
        // let try1=5;
        // while(try1>0)
        //     {
        //         try{
        //             await this.wait(5)
        await this.page.mouse.click(500,500);
                    //await this.page.frameLocator('iframe[title="3rd party ad content"]').locator('#dismiss-button').click();
            //         console.log("clicked on the ad");
            //         break;
            //     }
            //   catch{
            //     console.log("ad not found");
            //   }  
            //   try1--;
            // }
                
    }

}