const {When , Then, Given } = require('@wdio/cucumber-framework')
const Checkboxes = require('../pageobjects/checkboxes.page')

When(/^I click checkbox 1$/,async()=>{
    await Checkboxes.clickCheckbox1()
})

Then(/^I can see checkbox 1 is checked$/,async()=>{
   await expect(await Checkboxes.checkbox1).toBeChecked()
})

Then(/^I can see checkbox 1 is not checked$/,async()=>{
    await expect(await Checkboxes.checkbox1).not.toBeChecked()
})

When(/^I click checkbox 2$/,async()=>{
    await Checkboxes.clickCheckbox2()
})

Then(/^I can see checkbox 2 is not checked$/,async()=>{
    await expect(await Checkboxes.checkbox2).not.toBeChecked()
})

Then(/^I can see checkbox 2 is checked$/,async()=>{
    await expect(await Checkboxes.checkbox2).toBeChecked()
})