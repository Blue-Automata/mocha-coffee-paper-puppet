let BasePage = require('../basePage');

class HomePage extends BasePage {

    constructor(page) {
        super(page);
        this.page = page;
    }

    async navigateToHomePageByUrl() {
        await this.page.goto("https://google.com");
    }

    async search(text) {
        await this.waitUntilDisplayed("input[name='q']")
        await this.setText("input[name='q']", text)
        await this.click('.FPdoLc.tfB0Bf input[value="Google Search"]');
    }

    async waitUntilResultPageIsDisplayed() {
        await this.waitUntilDisplayed('div.g:first-of-type a cite')
    }

    async getFirstResultText() {
        return await this.getText('div.g:first-of-type a cite');
    }


}

module.exports = HomePage;