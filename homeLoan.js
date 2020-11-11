var myMethods = {
    mySearch: (object, data) => {
        object
            .click('@home')
            .setValue('@loan', data.loanT)
            .setValue('@property', data.propT)
            //go through rest of the pages to get to results
            .click('@masterNxt')
            .click('@masterNxt')
            .click('@phBtn')
            .click('@yesBtn')
            .click('@noBtn')
            .click('@masterNxt')
            .click('@good')
            .click('@fClose')
            .click('@masterNxt')
            .click('@masterNxt')
            .verify.containsText('@formLT', data.resultL)
            .verify.containsText('@formPT',data.resultP)
            .click('@startAgain')
            Loan.navigate()
        
    }
}
var myData = [
    { loanT: '', propT: '', resultL:'Home Purchase', resultP:'Single Family Home' },
    { loanT: '', propT: 'T' ,resultL:'Home Purchase', resultP:'Town Home'},
    { loanT: '', propT: 'C',resultL:'Home Purchase', resultP:'Condo'},
    { loanT: '', propT: 'M',resultL:'Home Purchase', resultP:'Multi Family'},
    { loanT: '', propT: 'mo',resultL:'Home Purchase', resultP:'Mobile Home'},
    { loanT: 'R', propT: 'sin',resultL:'Refinance', resultP:'Single Family Home'},
    { loanT: 'R', propT: 'T',resultL:'Refinance', resultP:'Town Home'},
    { loanT: 'R', propT: 'C',resultL:'Refinance', resultP:'Condo'},
    { loanT: 'R', propT: 'M',resultL:'Refinance', resultP:'Multi Family'},
    { loanT: 'R', propT: 'mo',resultL:'Refinance', resultP:'Mobile Home'},
    { loanT: 'he', propT: 'sin',resultL:'Home Equity', resultP:'Single Family Home'},
    { loanT: 'he', propT: 'T',resultL:'Home Equity', resultP:'Town Home'},
    { loanT: 'he', propT: 'C',resultL:'Home Equity', resultP:'Condo'},
    { loanT: 'he', propT: 'M',resultL:'Home Equity', resultP:'Multi Family'},
    { loanT: 'he', propT: 'mo',resultL:'Home Equity', resultP:'Mobile Home'},
]
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
            myMethods
                .mySearch(Loan, picks)
        })
    }
}

