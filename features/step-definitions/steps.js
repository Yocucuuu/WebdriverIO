const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const Homepage = require('../pageobjects/home.page');
const ABTesting = require('../pageobjects/abTesting.page');
const AddRemoveElements = require('../pageobjects/addRemoveElements.page');
const BasicAuth = require('../pageobjects/basicAuth.page');
const BrokenImages = require('../pageobjects/brokenImages.page');
const ChallengingDOM = require('../pageobjects/challengingDOM.page');
const Checkboxes = require('../pageobjects/checkboxes.page');
const ContextMenu = require('../pageobjects/contextMenu.page');

const pages = {
    login: LoginPage,
    home: Homepage,
    ABTesting: ABTesting,
    AddRemoveElements: AddRemoveElements,
    BasicAuth : BasicAuth,
    BrokenImages : BrokenImages,
    ChallengingDOM : ChallengingDOM,
    Checkboxes : Checkboxes,
    ContextMenu : ContextMenu,
}

Given(/^I am on the (\w+) page$/,async  (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/,  (username, password) => {
    LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/,  (message) => {
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

When(/^I click (.+?) menu at homepage$/, async (menu) => {
    await Homepage.openMenu(menu)
});

Then(/^Verify i am at (\w+) page$/, async (page) => {
    await pages[page].verifyPage()
});





