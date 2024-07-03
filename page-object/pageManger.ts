import { Page } from "@playwright/test";
import { NavigationPage } from "./navigationPage";

export class PageManager{

    readonly page:Page;
    readonly navigationPage;

    constructor(page:Page)
    {
        this.page=page;
        this.navigationPage=new NavigationPage(page);
    }

    navigationPageObj()
    {
        return this.navigationPage;
    }

}