var myData = require('../testAssets/homeAsset')
var Loan = {}
module.exports = {
    beforeEach: browser => {
        Loan = browser.page.hloanPage()
        Loan.navigate()
    },
    after: browser => {
        Loan.end()
    },
    'Page One': browser => {
        myData.forEach(picks => {
            Loan
                .mySearch(picks)
        })
}
}
