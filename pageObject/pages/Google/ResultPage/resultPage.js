const BasePage = require('../../../basePage')
const { FIRST_CITE } = require('./resultPageElements')

//Page Object example for Google
/*
  The class inherits from base page
*/
class GoogleResultPage extends BasePage {

    constructor(page) {
        super(page)
        this.page = page
    }


    /*
        waits for the result page to display  
    */
    async waitUntilPageIsDisplayed() {
        await this.waitUntilDisplayed(FIRST_CITE, 20000)
    }

    /*
        extracts the innert text of the first result
    */
    async getFirstResultText() {
        return await this.getText(FIRST_CITE)
    }

}

module.exports = GoogleResultPage

