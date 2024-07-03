import { Page } from "@playwright/test";


export class HelperBase{

    readonly page:Page;
    constructor(page:Page)
    {
        this.page=page;
    }

    async wait(timeinsec :number){
        await this.page.waitForTimeout(timeinsec*1000);
    }

}