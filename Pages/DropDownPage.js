

import { test } from '@playwright/test'

import { BasePage } from './BasePage'

import testdata from '../data/testdata.json'

import { ProductsortcontainerXpath } from '../PageObjects/Objects'

export class DropDownPage extends BasePage {

    constructor(page) {

        super(page);
        this.page = page ;
    }

    async ValidateDropdown() {

        const dropdown1 = this.page.locator(ProductsortcontainerXpath);
        const options = await dropdown1.locator('option').allTextContents();

        console.log(options);

        await dropdown1.selectOption('Price (high to low)');
    }

}

//module.exports = DropDownPage;
