class BasePage {

    constructor(page) {
        this.page = page
        this.defaultTimeout = 10000
    }

    async waitUntilDisplayed(selector, timeout = this.defaultTimeout) {
        try {
            await this.page.waitForSelector(selector, { "timeout": timeout })
        } catch (err) {
            throw new Error(err)
        }
    }

    async setText(selector, text, timeout = this.defaultTimeout) {
        try {
            await this.page.focus(selector, { "timeout": timeout })
            await this.page.keyboard.type(text, { visible: true, timeout: timeout })
        } catch (err) {
            throw new Error(err)
        }

    }

    async click(selector, timeout = this.defaultTimeout) {
        try {
            await this.page.click(selector, { "timeout": timeout })
        } catch (err) {
            throw new Error(err)
        }
    }

    async getText(selector, timeout = this.defaultTimeout) {
        try {
            return await this.page.$eval('div.g:first-of-type a cite', e => e.innerText);
        } catch (err) {
            throw new Error(err)
        }
    }
}

module.exports = BasePage;