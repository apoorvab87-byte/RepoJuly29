


// import base from '@playwright/test'

import { ProductsPage } from '../Pages/ProductsPage'

import { BasePage } from '../Pages/BasePage'

import { test as base, expect } from '@playwright/test'

import { access, mkdir } from 'node:fs/promises';

import { readFileSync } from 'node:fs';

import path from 'node:path'

import { ClientRequest } from 'node:http';

async function fileExists(filePath) {

    try {

        await access(filePath);
        return true;

    }
    catch {

        return false;
    }
}

async function createAuthenticatedState(browser, authFile) {

    const context = await browser.newContext({ storageState: undefined });
    const page = await context.newPage();
    const basePage = new BasePage(page);

    await basePage.login('standard_user', 'secret_sauce');
    await page.waitForURL("https://www.saucedemo.com/inventory.html", { timeout: 120_000 }).catch(() => { });
    await context.storageState({ path: authFile });
    await context.close();


}

export const test = base.extend({

    BasePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },

    ProductsPage: async ({ page }, use) => {
        //const productsPage = new ProductsPage(page);
        await use(new ProductsPage(page));
    },




workerStorageState: [async ({ browser }, use, workerInfo) => {

    const authDir = path.resolve(workerInfo.project.outputDir, ".auth");
    const authFile = path.join(authDir, `standard-user-${workerInfo.parallelIndex}.json`);
    await mkdir(authDir, { recursive: true });
    let reuseExistingState = false;
    if (await fileExists(authFile)) {
        const validationContext = await browser.newContext({ storageState: authFile });
        const validationPage = await validationContext.newPage();
        await validationPage.goto('https://www.saucedemo.com/inventory.html', { waitUntil: "domcontent" })
            ; await validationPage.waitForLoadState("networkidle", { timeout: 15_000 }).catch(() => { });


        reuseExistingState = validationPage.url().includes('/inventory.html');
        await validationContext.close();
    }

    if (!reuseExistingState) {
        await createAuthenticatedState(browser, authFile);

    }

    await use(authFile);
}, { scope: "worker" }
],

    storageState: async ({ workerStorageState }, use) => {
        await use(workerStorageState);
    },
})
//exports.expect = expect;



/*ProductsPage: async ({page}, use) =>{  //This creates a fixture named ProductsPage.

    //page → built-in Playwright page fixture
//use → function that makes the fixture available inside the test
    await use(new ProductsPage(page)); // new object creation . ➡️ create the ProductsPage class object and pass Playwright’s page into it.
}



*/
//exports.expect = base.expect;
export { expect };


