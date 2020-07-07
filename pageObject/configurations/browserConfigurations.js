function getBrowserConfiguration() {
    let isHeadless = process.env.IS_HEADLESS === "true"
    let browserConfiguration;

    if(isHeadless) {
        return browserConfiguration = { 
            headless: true,
            args: [
            "--no-sandbox",
            "--disable-gpu"
            ]}
    } else {
        return browserConfigurations = { headless: false }
    }
}

module.exports = getBrowserConfiguration