//import {test} from '@playwright/test'

import { BasePage } from '../Pages/BasePage'

import { DropDownPage } from '../Pages/DropDownPage'

export class ProductsPage extends DropDownPage {

    constructor(page) {
        super(page);
        //this.page=page;
       
    }


    async ProductsItemName() {

        const productsItemName = await this.page.locator('//div[@class="inventory_item_name "]');
        const productsItemNames = await productsItemName.allTextContents();
        console.log(productsItemNames);
        const count = await productsItemName.count();
        console.log(count);

        for (let i = 0; i <= count; i++) 
            {
            if (await productsItemName.nth(i).textContent() === 'Sauce Labs Onesie') 
                {

                await this.page.locator("//div[@class='inventory_item_name ']/following::button").nth(i).click();
                //("//div[@class='inventory_item_name ']/following::button")
                await this.page.locator("//a[@class='shopping_cart_link']").click();
                break;
}
        }

     
/* 
    async ProductsPagemethod() {

        const productsPrice = await this.page.locator("//div[@class='inventory_item_price']");
        const productPrices = await productsPrice.allTextContents();
        console.log(productPrices);
        const count = await productsPrice.count();
        console.log(count);

        for (let i = 0; i <= count; i++) 
            {
            if (await productsPrice.nth(i).textContent() === '$7.99') 
                {

                await this.page.locator("//div[@class='inventory_item_name ']/following::button").nth(i).click();
                //("//div[@class='inventory_item_name ']/following::button")
                await this.page.locator("//a[@class='shopping_cart_link']").click();
                break;
}
        }
 */
    }

async logout() {

    const logoutconst = await this.page.locator("//button[@id='react-burger-menu-btn']").click();
    const logoutclick =  await this.page.locator("//a[@id='logout_sidebar_link']").click();  

}

}

//module.exports = ProductsPage;
