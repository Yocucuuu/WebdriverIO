const { browser } = require('@wdio/globals')
const MyInterface = {
    verifyPage : function(){throw new Error("Must Implement on Page Object");}
}
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`${browser.options.baseUrl}/${path}`)
    }

    verifyPage(){
        throw new Error("Must Implement on Page Object")
    }

    waitElementDisplayed(element){  
        if(!element.isDisplayed()){
            element.waitForDisplayed(browser.options.timeout)
        }
    }

    waitElementEnabled(element){  
        if(!element.isEnabled()){
            element.waitForEnabled(browser.options.timeout)
        }
    }

    waitElementExist(element){  
        if(!element.isExisting()){
            element.waitForExist(browser.options.timeout)
        }
    }

    clickElement(element){
        this.waitElementDisplayed(element)
        element.click()
    }

    async clickScrollElement(element){
        this.waitElementDisplayed(element)
        await element.scrollIntoView()
        await element.click()
    }

    verifyPageUrl(url){ 
        expect(browser.getUrl()).to.equal(url);
    }

    async verifyElementDisplayed(element){
        expect(await element.isDisplayed()).toBe(true)
    }

    async getAttribute(element,attr){
        await element.getAttribute(attr)
    }

    async getValue(element){
        await element.getValue()
    }

    async rightClick(element){
        this.waitElementDisplayed(await element)
        await element.click({button:'right'})
        await browser.pause(10000)
    }
    


}
