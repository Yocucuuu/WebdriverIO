const {Given,When,Then} = require('@wdio/cucumber-framework')
const addRemoveElements = require('../pageobjects/addRemoveElements.page')
let listDeleteSize = 0


When(/^I click button 'Add Element'$/, async()=>{
    await addRemoveElements.clickAddElement()
    listDeleteSize++
})

When(/^I click button 'Add Element' for (\w+) times$/, async(number)=>{
    for(let i=0;i<number;i++){
        await addRemoveElements.clickAddElement()
        listDeleteSize++
    }
})

When(/^I click first button 'Delete' the element will removed$/, async()=>{
    await addRemoveElements.deleteButtonByIndex(0)
})

When(/^I click last button 'Delete' the element will removed$/, async()=>{
    await addRemoveElements.deleteButtonByIndex(await addRemoveElements.getListSize()-1)
})

Then(/^I will see an element is added$/, async()=>{
    await addRemoveElements.verifyElementisAdded()
})

Then(/^I will see (\w+) element is added$/, async(number)=>{
    await addRemoveElements.verifyListSize(parseInt(number))
})

Then(/^I will see list element is empty$/, async()=>{
    await addRemoveElements.verifyListSize(0)
})
