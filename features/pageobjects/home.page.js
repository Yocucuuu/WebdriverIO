const { $ } = require('@wdio/globals') 
const Page = require('./page')

class Homepage extends Page{
    get welcomeHeading(){return $('h1.heading')}
    get forkmeOnGithub(){return $(`//img[@alt='Fork me on GitHub']`) }


    open(){
        super.open('')
    }


    async getLink(text){
        return await $(`//ul//li//a[.='${text}']`)
    }

    async openMenu(menu){
        await super.clickScrollElement(await this.getLink(menu))
        await browser.pause(3000)
    }


}
module.exports = new Homepage()