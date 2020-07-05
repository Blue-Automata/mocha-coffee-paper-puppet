const puppeteer = require('puppeteer')
const assert = require('assert')
const GoogleHomePage = require('../pageObject/pages/Google/HomePage/homePage')
const GoogleResultPage = require('../pageObject/pages/Google/ResultPage/resultPage')
const { getRandomString, delay } = require('../pageObject/helpers/commonService')

const { congratulations } = require('../pageObject/helpers/congratulations')

/*
        Describes the test suite
    */
describe('Google Page', function() {
    this.timeout(15000) // set timeout for each test scenario
    let browser
    let page


    /*
        Test scenario
        1) Goes to Google homepage
        2) Searches for sqasquared.com
        3) Verify first search cite result is "sqasquared.com"
    */
    it('Verify sqasquared.com is the first search result ', async() => {
        let expectedText = "sqasquared.com"
        let searchTerm = "sqasquared.com"

        let homePage = new GoogleHomePage(page)
        await homePage.navigateToPageByUrl()
        await homePage.search(searchTerm)

        let resultPage = new GoogleResultPage(page)
        await resultPage.waitUntilPageIsDisplayed()
        let firstResult = await resultPage.getFirstResultText()
        
        let assertionMessage = `Text of (${firstResult})
         does not match expected text of (${expectedText})`

        assert(firstResult === searchTerm, assertionMessage)
        congratulations(page)
        await delay(5000) // added delay for demo purposes
    })


    /*
        Before Hook for each scenario instance
    */
    beforeEach(async() => {
        browser = await puppeteer.launch({
            headless: false
        })
        page = await browser.newPage()
        page.setDefaultTimeout(50000)

    })

    /*
        After Hook for each ending scenario
    */
    afterEach(function() {
        let randomString = getRandomString()
        if (this.currentTest.state == "failed") {
            let screenshotPath = './screenshots/' + this.currentTest.title.replace(/ /g, "_")
            //if error take screenshot
            page.screenshot({ path: screenshotPath }).catch(err => console.log("screenshot failed"))
        }
        browser.close()
    })

})