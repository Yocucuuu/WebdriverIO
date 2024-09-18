const {$} = require('@wdio/globals')
const Page = require('./page')

class Checkboxes extends Page{

    get h3Checkboxes(){return $(`//h3[.='Checkboxes']`)}
    get checkbox1(){return $$(`//input[@type='checkbox']`)[0]}
    get checkbox2(){return $$(`//input[@type='checkbox']`)[1]}
    
    async verifyPage(){
        super.waitElementDisplayed(await this.h3Checkboxes)
        super.verifyElementDisplayed(await this.h3Checkboxes)
    }

    async clickCheckbox1(){
        await super.clickScrollElement(await this.checkbox1)
    }

    async clickCheckbox2(){
       await super.clickScrollElement(await this.checkbox2)
    }


}module.exports =  new Checkboxes()