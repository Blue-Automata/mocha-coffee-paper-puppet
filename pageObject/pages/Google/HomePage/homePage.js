const BasePage = require('../../../basePage')
const { SEARCH_BAR,
     SEARCH_BUTTON,
     FIRST_CITE } = require('./homePageElements')

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
    async navigateToPageByUrl() {
        await this.page.goto("https://google.com")
    }

    /*
        makes a google search  
    */
    async search(text) {
        await this.setText(SEARCH_BAR, text)
        await this.click(SEARCH_BUTTON)
    }

}

module.exports = GoogleHomePage

