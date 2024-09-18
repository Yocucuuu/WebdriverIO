const {$} = require ('@wdio/globals')
const Page = require ('./page')

class ContextMenu extends Page{

    get h3ContextMenu(){return $(`//h3[.='Context Menu']`)}
    get hotspot(){return $(`#hot-spot`)}

    async verifyPage(){
        super.waitElementDisplayed(await this.h3ContextMenu)
        super.verifyElementDisplayed(await this.h3ContextMenu)
    }

    async rightClickBox(){
        await super.rightClick(await this.hotspot)
    }

    async verifyAlertisOpen(){
        let alert = await browser.isAlertOpen()
        let alerttext = await browser.getAlertText()
        console.log(alert)
        console.log(alerttext)
    }

}
module.exports = new ContextMenu()