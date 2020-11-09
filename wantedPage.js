module.exports = {
    url: 'http://localhost:3000/#/enter',
    elements: {
        //Enter Wanted Required Fields
        header: 'input[name="hdrInput"]',
        MKE: 'input[name="mkeInput"]',
        OAI: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',
        sex: 'select[name="sexInput"]',
        rE: 'select[name="racInput"]',
        hgt: 'input[name="hgtInput"]',
        wgt: 'input[name="wgtInput"]',
        hair: 'input[name="haiInput"]',
        offense: 'input[name="offInput"]',
        DoWV: 'input[name="dowInput"]',
       //Enter Wanted Optional Fields
        DL: 'input[name="olnInput"]',
        DLS: 'input[name="olsInput"]',
        DLED: 'input[name="oldInput"]',
        LP: 'input[name="licInput"]',
        LPS: 'input[name="lisInput"]',
        LPED:'input[name="lidInput"]',
        saveBtn: '#saveBtn',
        clearBtn: '#clearBtn',
        errorList: '#errorList'
    }
}