const {$} = require ('@wdio/globals')
const  Page = require ('./page')

class AddRemoveElements extends Page{

    get h3AddRemoveElement(){return $(`//h3[.='Add/Remove Elements']`)}
    get buttonAddElement(){return $(`//button[.='Add Element']`)}
    get listElement(){return $$('button.added-manually')}

    // get the Delete button from list 
    async getDeleteButton(index){
        let listDelete =  await $$('button.added-manually')
        console.log('size'+listDelete.length)
        return listDelete[index]
    }
    
    async getListSize(){
        return await this.listElement.length
    }

    async clickAddElement(){
        await super.waitElementDisplayed(await this.buttonAddElement)
        await super.clickScrollElement(await this.buttonAddElement)
    }

    async deleteButtonByIndex(index){
        await super.waitElementDisplayed(await this.getDeleteButton(index))
        await super.clickScrollElement(await this.getDeleteButton(index))
    }
    
    async verifyListSize(expected){
        let listDeleteSize =  (await this.listElement).length
        expect(listDeleteSize).toEqual(expected)
    }
    
    async verifyElementisAdded(){
        let firstElement =  (await this.listElement)[0]
        super.waitElementDisplayed(firstElement)
        super.verifyElementDisplayed(firstElement)
    }

    async verifyPage(){
        super.waitElementDisplayed(await this.h3AddRemoveElement)
        super.verifyElementDisplayed(await this.h3AddRemoveElement)
    }


    

}
module.exports = new AddRemoveElements()