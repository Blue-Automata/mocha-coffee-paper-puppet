const puppeteer = require('puppeteer');
let assert = require('assert');
let BasePage = require('../pageObject/basePage');
let HomePage = require('../pageObject/pages/homePage');

//test suite
describe('Google Page', function() {
    this.timeout(15000); // set timeout for each test scenario
    let browser;
    let page;

    // test scenario
    it('test#0 Verify sqasquared.com is the first search result ', async() => {
        let expectedText = "sqasquared.com"
        let homePage = new HomePage(page)
        await homePage.navigateToHomePageByUrl()
        await homePage.search("sqasquared")
        await homePage.waitUntilResultPageIsDisplayed()
        let firstResult = await homePage.getFirstResultText()
        await assert(firstResult === expectedText, `Text of (${firstResult}) does not match expected text of (${expectedText})`)
        await delay(5000)
    });

    //before hook for each test scenario
    beforeEach(async() => {
        browser = await puppeteer.launch({
            headless: false
        });
        page = await browser.newPage();
        await page.setDefaultTimeout(50000);

    });

    // after hook for each test scenario
    afterEach(function() {
        let randomString = getRandomString();
        if (this.currentTest.state == "failed") {
            let screenshotPath = './screenshots/' + this.currentTest.title.replace(/ /g, "_");
            //make screenshot
            page.screenshot({ path: screenshotPath }).catch(err => console.log("screenshot failed"))
        }
        browser.close();
    });

});

function getRandomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}