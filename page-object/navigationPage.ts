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
        this.navigateToSelenium();
        await this.wait(5);
        await this.tabledemo.click();
        await this.closeAd();
    }

    private async closeAd() {
        try{
                await this.page.frameLocator('iframe[name="google_ads_iframe_\\/24132379\\/INTERSTITIAL_DemoGuru99_0"]').getByLabel('Close ad').click();
          }
          catch{}          
    }

}