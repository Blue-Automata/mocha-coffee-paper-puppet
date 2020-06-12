/*
    Class for basic interaction with the browsers
*/
class BasePage {

    constructor(page) {
        this.page = page
        this.defaultTimeout = 10000
    }

    /*
        waits for element to be displayed
    */
    async waitUntilDisplayed(selector, timeout = this.defaultTimeout) {
        try {
            await this.page.waitForSelector(selector, { "timeout": timeout, visible: true })
        } catch (err) {
            throw new Error(err)
        }
    }

    /*
        enters text into a textfield
    */
    async setText(selector, text, timeout = this.defaultTimeout) {
        try {
            await this.waitUntilDisplayed(selector, timeout)
            await this.page.focus(selector, { "timeout": timeout })
            await this.page.keyboard.type(text, { visible: true, "timeout": timeout })
        } catch (err) {
            throw new Error(err)
        }
    }

    /*
        clicks the selected element
    */
    async click(selector, timeout = this.defaultTimeout) {
        try {
            await this.page.click(selector, { "timeout": timeout })
        } catch (err) {
            throw new Error(err)
        }
    }

    /*
        returns the inner text of an element
    */
    async getText(selector, timeout = this.defaultTimeout) {
        try {
            return await this.page.$eval('div.g:first-of-type a cite', e => e.innerText);
        } catch (err) {
            throw new Error(err)
        }
    }
}

export default BasePage;