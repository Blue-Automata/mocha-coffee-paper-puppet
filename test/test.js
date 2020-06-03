const puppeteer = require('puppeteer');


describe("Login page", function() {

    it("verify user goes to google", async() => {
        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('https://google.com');
        await page.screenshot({ path: 'example.png' });
        await browser.close();
    });

});