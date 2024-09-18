const {$} = require('@wdio/globals')
const Page = require('./page')


class ABTesting extends Page{

    get h3AbTesting(){return $(`//h3[.='A/B Test Control']`)}

    async verifyPage(){
        super.waitElementDisplayed(await this.h3AbTesting)
        super.verifyElementDisplayed(await this.h3AbTesting)
    }
    
}

module.exports = new ABTesting()