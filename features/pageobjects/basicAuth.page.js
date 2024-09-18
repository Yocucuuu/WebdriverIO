const {$} = require('@wdio/globals')
const Page = require('./page')

class BasicAuth extends Page {

    
    get h3BasicAuth(){return $(`//h3[.='Add/Remove Elements']`)}
    get inputUsername(){return $(`//h3[.='Add/Remove Elements']`)}
    get inputPassword(){return $(`//h3[.='Add/Remove Elements']`)}

    async verifyPage(){
        super.waitElementDisplayed(await this.h3AddRemoveElement)
        super.verifyElementDisplayed(await this.h3AddRemoveElement)
    }

}
module.exports = new BasicAuth()