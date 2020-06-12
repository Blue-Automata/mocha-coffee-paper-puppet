const puppeteer = require('puppeteer');
let assert = require('assert');
let BasePage = require('../pageObject/basePage');
let HomePage = require('../pageObject/pages/homePage');
const { getRandomString, delay } = require('../pageObject/helpers/commonService');

/*
        Describes the test suite
    */
describe('Google Page', function() {
    this.timeout(15000); // set timeout for each test scenario
    let browser;
    let page;


    /*
        Test scenario
    */
    it('Verify sqasquared.com is the first search result ', async() => {
        let expectedText = "sqasquared.com"
        let homePage = new HomePage(page)
        let searchTerm = "sqasquared.com"
        await homePage.navigateToHomePageByUrl()
        await homePage.search(searchTerm)
        await homePage.waitUntilResultPageIsDisplayed()
        let firstResult = await homePage.getFirstResultText()
        let assertionMessage = `Text of (${firstResult}) does not match expected text of (${expectedText})`
        assert(firstResult === searchTerm, assertionMessage)
            // added delay for demo purposes
        await delay(5000)
    });


    /*
        Before Hook for each scenario instance
    */
    beforeEach(async() => {
        browser = await puppeteer.launch({
            headless: false
        });
        page = await browser.newPage();
        page.setDefaultTimeout(50000);

    });

    /*
        After Hook for each ending scenario
    */
    afterEach(function() {
        let randomString = getRandomString();
        if (this.currentTest.state == "failed") {
            let screenshotPath = './screenshots/' + this.currentTest.title.replace(/ /g, "_");
            //if error take screenshot
            page.screenshot({ path: screenshotPath }).catch(err => console.log("screenshot failed"))
        }
        browser.close();
    });

});