const {$} = require('@wdio/globals')
const Page = require('./page')

class ChallengingDOM extends Page{

    get h3ChallengingDOM(){return $(`//h3[.='Challenging DOM']`)}
    get blueButton(){return $(`//a[@class='button']`)}
    get redButton(){return $(`//a[@class='button alert']`)}
    get greenButton(){return $(`//a[@class='button success']`)}
    get tableRows(){return $$(`//table/tbody/tr`)}
    get canvas(){return $(`#canvas`)}

    async verifyPage(){
        super.waitElementDisplayed(await this.h3ChallengingDOM)
        super.verifyElementDisplayed(await this.h3ChallengingDOM)
    }

    async clickBlueButton(){
        await super.clickScrollElement(await this.blueButton)
    }

    async clickRedButton(){
        await super.clickScrollElement(await this.redButton)
    }
    async clickGreenButton(){
        await super.clickScrollElement(await this.greenButton)
    }

    async getTableRowsbyIndex(index){
        return await this.tableRows[index]
    }

    async getCanvasValue(){
        return await this.canvas
    }




}module.exports =  new ChallengingDOM()