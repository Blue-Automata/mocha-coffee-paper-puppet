const axios = require('axios')
const assert = require('assert')

//Google API test suite
describe('Google API tests', function() {


    it("Verify Google url returns a status code of 200", async () => {
        let expectedStatus = 200
        let response = await axios.get('https://www.google.com');
        let responseStatus = response.status
        let assertionMessage = `
            Response Status of (${responseStatus}) does not match
            expected response status of (${expectedStatus})`
        assert(responseStatus === expectedStatus, assertionMessage)
    })

})