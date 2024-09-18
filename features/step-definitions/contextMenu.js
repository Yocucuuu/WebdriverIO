const {Given, When, Then} = require('@wdio/cucumber-framework')
const ContextMenu= require('../pageobjects/contextMenu.page')

When(/^I right click the context menu$/,async()=>{
    await ContextMenu.rightClickBox()
})

When(/^I click 'OK' at the alert$/,async()=>{

})

Then(/^I can see alert is opening$/,async()=>{
    await ContextMenu.verifyAlertisOpen()
})

Then(/^I can see the alert is closed$/,async()=>{


})