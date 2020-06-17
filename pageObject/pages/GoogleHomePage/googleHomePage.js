const BasePage = require('../../basePage')
const { SEARCH_BAR,
     SEARCH_BUTTON,
     FIRST_CITE } = require('./googleHomePageElements')

//Page Object example for Google
/*
  The class inherits from base page
*/
class GoogleHomePage extends BasePage {

    constructor(page) {
        super(page)
        this.page = page
    }

    /*
        navigates to google home page  
    */
    async navigateToHomePageByUrl() {
        await this.page.goto("https://google.com")
    }

    /*
        makes a google search  
    */
    async search(text) {
        await this.setText(SEARCH_BAR, text)
        await this.click(SEARCH_BUTTON)
    }

    /*
        waits for the result page to display  
    */
    async waitUntilResultPageIsDisplayed() {
        await this.waitUntilDisplayed(FIRST_CITE, 20000)
    }

    /*
        extracts the innert text of the first result
    */
    async getFirstResultText() {
        return await this.getText(FIRST_CITE)
    }

}

module.exports = GoogleHomePage

