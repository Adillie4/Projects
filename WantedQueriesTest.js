var enterWanted = {}
var obList = {
    Header: 'HEADERTEST123', mKe: 'ABC', oAi: '123456789', Name: 'Santa Claus', Sex: 'Male',
    Race: 'White', Hgt: '511', Wgt: '211', Hair: 'white', Off: 'Brkng&Enting', WarrantD: '12252019'
}
var ftest1 = (browser, data) => {
    enterWanted
        .setValue('@header', data.Header)
        .setValue('@MKE', data.mKe)
        .setValue('@OAI', data.oAi)
        .setValue('@name', data.Name)
        .setValue('@sex', data.Sex)
        .setValue('@rE', data.Race)
        .setValue('@hgt', data.Hgt)
        .setValue('@wgt', data.Wgt)
        .setValue('@hair', data.Hair)
        .setValue('@offense', data.Off)
        .setValue('@DoWV', data.WarrantD)
        .click('@saveBtn')
        .verify.value('@header', data.Header)
        .verify.value('@MKE', data.mKe)
        .verify.value('@OAI', data.oAi)
        .verify.value('@name', data.Name)
        .verify.containsText('@sex', data.Sex)
        .verify.containsText('@rE', data.Race)
        .verify.value('@hgt', data.Hgt)
        .verify.value('@wgt', data.Wgt)
        .verify.value('@hair', data.Hair)
        .verify.value('@offense', data.Off)
        .verify.value('@DoWV', '2019-12-25')
}
var errorh = {
    low: '123456789', high: '1234567890123456789', over: '12345678901234567890', under: '12345678',
    expectedErrors: 'The "Header" field should be between 9 and 19 characters long.'
}
let errorChecker = function (browser, headerInfo, expectedErrors) {
    enterWanted
        .clearValue('@header')
        .setValue('@header', headerInfo.low)
        .click('@saveBtn')
        .verify.value('@header', headerInfo.low)
        .clearValue('@header')
        .setValue('@header', headerInfo.high)
        .click('@saveBtn')
        .verify.value('@header', headerInfo.high)
        .clearValue('@header')
        .setValue('@header', headerInfo.under)
        .click('@saveBtn')
        .verify.containsText('@errorList', headerInfo.expectedErrors)
        .clearValue('@header')
        .setValue('@header', headerInfo.over)
        .click('@saveBtn')
        .verify.containsText('@errorList', headerInfo.expectedErrors)
}
var errorM = {
    low: 'ab', high: 'asdf', over: 'asdfg', under: 'a', number: '12',
    expectedErrors: 'The "Header" field should be between 9 and 19 characters long.',
    expectedErrors2: 'The "MKE" field can only include characters from the English Alphabet or special characters.'
}
let errorChecker2 = function (browser, mkeInfo, expectedErrors) {
    enterWanted
        .clearValue('@MKE')
        .setValue('@MKE', mkeInfo.low)
        .click('@saveBtn')
        .verify.value('@MKE', mkeInfo.low)
        .clearValue('@MKE')
        .setValue('@MKE', mkeInfo.high)
        .click('@saveBtn')
        .verify.value('@MKE', mkeInfo.high)
        .clearValue('@MKE')
        .setValue('@MKE', mkeInfo.under)
        .click('@saveBtn')
        .verify.containsText('@errorList', mkeInfo.expectedErrors)
        .clearValue('@MKE')
        .setValue('@MKE', mkeInfo.over)
        .click('@saveBtn')
        .verify.containsText('@errorList', mkeInfo.expectedErrors)
        .clearValue('@MKE')
        .setValue('@MKE', mkeInfo.number)
        .click('@saveBtn')
        .verify.containsText('@errorList', mkeInfo.expectedErrors2)
}
var errorO = {
    low: '12345', high: '123456789012345', over: '1234567890123456', under: '1234',
    expectedErrors: 'The "Offense" field should be between 5 and 15 characters long.'
}
var errorChecker3 = (browser, offInfo, expectedErrors) =>{
    enterWanted
        .clearValue('@offense')
        .setValue('@offense', offInfo.low)
        .click('@saveBtn')
        .verify.value('@offense', offInfo.low)
        .clearValue('@offense')
        .setValue('@offense', offInfo.high)
        .click('@saveBtn')
        .verify.value('@offense', offInfo.high)
        .clearValue('@offense')
        .setValue('@offense',offInfo.under)
        .click('@saveBtn')
        .verify.containsText('@errorList', offInfo.expectedErrors)
        .clearValue('@offense')
        .setValue('@offense', offInfo.over)
        .click('@saveBtn')
        .verify.containsText('@errorList', offInfo.expectedErrors)
}
    module.exports = {
        before: browser => {
            enterWanted = browser.page.wantedPage()
            enterWanted.navigate()
        },
        after: browser => {
            enterWanted
                .end()
        },
        'EnterWantedFuntionalityRequired': browser => {
            ftest1(browser, obList)

        },
        'Header Boundary & Error Testing': browser => {
            errorChecker(browser, errorh)
        },
        'MKE Boundary & Error Testing': browser => {
            errorChecker2(browser, errorM)
        },
        'Offense Boundary & Error Testing': browser => {
            errorChecker3(browser, errorO)
        }
}