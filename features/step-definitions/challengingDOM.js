const {Given,When,Then} = require('@wdio/cucumber-framework')
const ChallengingDOM = require('../pageobjects/challengingDOM.page')



When('I click the blue button', async() => {
    await ChallengingDOM.clickBlueButton()
})

When('I click the green button',async () => {
    await ChallengingDOM.greenButton()
})

When('I click the red button', async() => {
    await ChallengingDOM.clickRedButton()
})

Then('I can see the number at canvas is changging', async() => {
    await console.log(await ChallengingDOM.getCanvasValue())
})
