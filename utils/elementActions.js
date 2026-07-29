import {test} from '@playwright/test'

export const clearInput = async (localStorage,timeout =10000 ) => {

try {

//await localStorage.clear ({timeout}) ;

await locator.clear({timeout}) ;
}
catch (error) {

throw new ElementNotFoundError(localStorage.toString(),timeout,

)} } 

export const waitAndClick = async (locator) => {
await locator.isVisible();
await locator.click();

}

export const waitAndFill = async (locator ,username) =>{
await locator.isVisible();
await locator.fill(username);

}
