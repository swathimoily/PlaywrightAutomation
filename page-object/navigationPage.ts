import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

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
        await this.wait(5);
        await this.tabledemo.click();
        await this.closeAd();
        await this.navigateToSelenium();
    }

    private async closeAd() {
        try{
                await this.page.frameLocator('iframe[title="3rd party ad content"]').getByLabel('Close ad').click();
                console.log("clicked on the ad");
            }
          catch{
            console.log("ad not found");
          }          
    }

}