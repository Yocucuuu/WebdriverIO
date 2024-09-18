const {When,Then,Given} =  require('@wdio/cucumber-framework')
const brokenImage = require('../pageobjects/brokenImages.page')

Then(/^I can see image (\w+) is not broken$/,async(index)=>{
    await brokenImage.verifyImageisNotBroken(index-1)
})