let BasePage = require('../basePage');

//Page Object example for Google
/*
  The class inherits from base page
*/
class HomePage extends BasePage {

    constructor(page) {
        super(page);
        this.page = page;
    }

    /*
        navigates to google home page  
    */
    async navigateToHomePageByUrl() {
        await this.page.goto("https://google.com");
    }

    /*
        makes a google search  
    */
    async search(text) {
        await this.setText("input[name='q']", text)
        await this.click('.FPdoLc.tfB0Bf input[value="Google Search"]');
    }

    /*
        waits for the result page to display  
    */
    async waitUntilResultPageIsDisplayed() {
        await this.waitUntilDisplayed('div.g:first-of-type a cite', 20000)
    }

    /*
        extracts the innert text of the first result
    */
    async getFirstResultText() {
        return await this.getText('div.g:first-of-type a cite');
    }


}

module.exports = HomePage;