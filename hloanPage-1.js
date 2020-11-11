var loanCommand = {
    mySearch: function (data) {
        this
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
            .verify.containsText('@formPT', data.resultP)
            .click('@send')
            //Bugs on the names are in the results...Otherwise names would be in array
            .verify.containsText('@end', 'Thank you')
            .click('@nxtBtn')
        this.navigate()
        return this
    }
}
module.exports = {
        url: 'http://localhost:3000/#/',
        commands: [loanCommand],
        elements: {
            home: '.home-btn',
            loan: '#loanTypes',
            property: '#propertyTypes',
            nxtBtn: '.margin-btn',
            // city: 'input[name="city"]',
            // nxtBtn2: '.wTwo-btn',
            phBtn: 'button[value="Primary Home"]',
            rpBtn: 'button[value="Rental Property"]',
            shBtn: 'button[value="Secondary Home"]',
            yesBtn: 'button[name="yesButton"]',
            noBtn: 'button[name="noButton"]',
            phBtn: 'button[value="Primary Home"]',
            estPprice: 'input[name="price"]',
            downP: 'input[name="down"]',
            masterNxt: 'button[name="nextButton"]',
            excellent: 'button[value="excellent"]',
            good: 'button[value="good"]',
            fair: 'button[value="fair"]',
            poor: 'button[value="poor"]',
            bankRno: 'button[value="Has never been in bankruptcy"]',
            bankR: 'button[value="Has had bankruptcy before"]',
            fClose: 'button[value="Has had a foreclosure before"]',
            both: 'button[value="Has had both a foreclosure and a bankruptcy"]',
            // address: '#addressOne',
            // address2: '#addressTwo'
            send: 'button[name="sendButton"]',
            startAgain: 'button[name="restartButton"]',
            // formN: '.overarching-div',
            formLT: 'p[class="loanType p2"]',
            formPT: 'p[class="propertyType p2"]',
            // formT:'p[class="propertyPurpose p2"]'
            end:'p[name="promptText"]'
        }
    }