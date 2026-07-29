import { test } from '@playwright/test' //playwright test framework

import testdata from '../data/testdata.json' // Test data file

import { UserNameXPath, PasswordXPath, LoginBtnXPath } from '../PageObjects/Objects'  // Page Objects file

import { waitAndClick, waitAndFill } from '../utils/elementActions'; // Utility functions for element actions

export class BasePage {

    constructor(page) {

        this.page = page;

    }

    async login() {

        await this.page.goto(testdata.url);

        // await this.page.pause();

        await waitAndFill(this.page.locator(UserNameXPath), testdata.UserName)

        // await this.page.locator(UserNameXPath).fill(testdata.UserName);

        await this.page.locator(PasswordXPath).fill(testdata.Password);

        // await this.page.locator(LoginBtnXPath).click();

        await waitAndClick(this.page.locator(LoginBtnXPath))

    }

}

//module.exports = { BasePage }

