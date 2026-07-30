

//import {test,expect} from '@playwright/test'

import testdata from '../data/testdata.json'

import { UserNameXPath, PasswordXPath, LoginBtnXPath, ProductsortcontainerXpath } from '../PageObjects/Objects'

//import { DropDownPage } from '../Pages/DropDownPage' 

//import { ProductsPage } from '../Pages/ProductsPage'

import { test, expect } from '../Fixtures/base'

test('demo', async ({ page, ProductsPage, request }) => {

    //const productspage = new ProductsPage(page);
    await ProductsPage.login();
    //await page.pause();
    await ProductsPage.ValidateDropdown();
    //await page.pause();
    //await ProductsPage.ProductsPagemethod();
    //await page.pause();
    await ProductsPage.ProductsItemName();
     //await page.pause();
    await ProductsPage.logout();
    //await page.pause();

    //GET API REQUEST
         const resp = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    
        const respbody = await resp.body();
        console.log(respbody);
        const respjson = await resp.json();
        console.log(respjson);
        expect(resp.status()).toBe(200);
        expect(respjson.id).toBe(1);
    
     
    //POST API REQUEST
    /* 
         const requestBody = {
            title: "Playwright API Testing",
            body: "Testing POST request using Playwright",
            userId: 1
        };
    
    
        const response = await request.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                data: requestBody
            }
        );
    
    
        // Validate status code
        expect(response.status()).toBe(201);
    
    
        // Get response JSON
        const responseJson = await response.json();
    
        console.log(responseJson);
    
    
        // Validate response data
        expect(responseJson.title)
            .toBe("Playwright API Testing");
    
        expect(responseJson.body)
            .toBe("Testing POST request using Playwright");
    
        expect(responseJson.userId)
            .toBe(1);
     */

/* 
//PATCH
    const requestBody = {
        title: "Updated Playwright Title"
    };

    const response = await request.patch(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data: requestBody
        }
    );

    // Validate status code
    expect(response.status()).toBe(200);

    // Get response JSON
    const responseJson = await response.json();

    console.log(responseJson);

    // Validate updated data
    expect(responseJson.id).toBe(1);
    expect(responseJson.title).toBe("Updated Playwright Title");

 */


//DELETE
    
   /*  const response = await request.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    // Validate status code
    expect(response.status()).toBe(200);

    // Get response body
    const responseBody = await response.text();

    console.log(responseBody);

    // JSONPlaceholder returns an empty object: {}
    expect(responseBody).toBe('{}');

 */
}
);
