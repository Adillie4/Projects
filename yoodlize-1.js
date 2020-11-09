var yoodlizeOPage
module.exports = {
    beforeEach: browser => {
        yoodlizeOPage = browser.page.yoodlizePage()
        yoodlizeOPage.navigate()
    },
    'See All Functonality': browser => {
        yoodlizeOPage
            .click('@seeAllRV')
            .verify.containsText('@resultTextRV', 'Recreational Vehicles')
            .api.back()
        yoodlizeOPage
            .click('@seeAllOG')
            .verify.containsText('@resultOG', 'Outdoor Gear')
            .api.back()
        yoodlizeOPage
            .click('@seeAllE')
            .verify.containsText('@resultE', 'Electronics')
            .api.back()
        yoodlizeOPage
            .click('@seeAllPW')
            .verify.containsText('@resultPW', 'Party & Wedding Equipment')
            .api.back()
        yoodlizeOPage
            .click('@seeAllT')
            .verify.containsText('@resultT', 'Tools')
            .api.back()
        yoodlizeOPage
            .click('@seeAllC')
            .verify.containsText('@resultC', 'Clothing')
            .api.back()
        yoodlizeOPage
            .click('@seeAllHK')
            .verify.containsText('@resultHK', 'Home and Kitchen')
            .api.back()
        yoodlizeOPage
            .click('@seeAllTG')
            .verify.containsText('@resultTG', 'Toys and Games')
            .api.back()
        yoodlizeOPage
            .click('@seeAllLG')
            .verify.containsText('@resultLG', 'Lawn and Garden')
            .api.back()
        yoodlizeOPage
            .click('@seeAllSE')
            .verify.containsText('@resultSE', 'Sporting Equipment')
            .api.back()
        yoodlizeOPage
            .click('@seeAllD')
            .verify.containsText('@resultD', 'DVDs')
            .api.back()
        yoodlizeOPage
            .click('@seeAllV')
            .verify.containsText('@resultV', 'Venues')
            .api.back()
        yoodlizeOPage
            .click('@seeAllM')
            .verify.containsText('@resultM', 'Music')
            .api.back()
        yoodlizeOPage
            .click('@seeAllBE')
            .verify.containsText('@resultBE', 'Business Equipment')
            .api.back()
        yoodlizeOPage
            .click('@seeAllMi')
            .verify.containsText('@resultMi', 'Misc')
            .api.back()
        yoodlizeOPage

    },
    'Icons Functonality': browser => {
        yoodlizeOPage
            .click('@icon1')
            .verify.containsText('@resultT', 'Tools')
            .api.back()
        yoodlizeOPage
            .click('@icon2')
            .verify.containsText('@resultOG', 'Outdoor Gear')
            .api.back()
        yoodlizeOPage
            .click('@icon3')
            .verify.containsText('@resultE', 'Electronics')
            .api.back()
        yoodlizeOPage
            .click('@icon4')
            .verify.containsText('@resultPW', 'Party & Wedding')
            .api.back()
        yoodlizeOPage
            .click('@icon5')
            .verify.containsText('@resultTextRV', 'Recreational Vehicles')
            .api.back()
        yoodlizeOPage
            .click('@icon6')
            .verify.containsText('@resultC', 'Clothing')
            .api.back()
        yoodlizeOPage
            .click('@icon7')
            .verify.containsText('@resultHK', 'Home and Kitchen')
            .api.back()
        yoodlizeOPage
            .click('@icon8')
            .verify.containsText('@resultTG', 'Toys and Games')
            .api.back()
        yoodlizeOPage
            .click('@icon9')
            .verify.containsText('@resultLG', 'Lawn and Garden')
            .api.back()
        yoodlizeOPage
            .click('@icon10')
            .verify.containsText('@resultSE', 'Sporting')
            .api.back()
        yoodlizeOPage
            .click('@icon11')
            .verify.containsText('@resultD', 'DVDs')
            .api.back()
        yoodlizeOPage
            .click('@icon12')
            .verify.containsText('@resultV', 'Venues')
            .api.back()
        yoodlizeOPage
            .click('@icon13')
            .verify.containsText('@resultM', 'Music')
            .api.back()
        yoodlizeOPage
            .click('@icon14')
            .verify.containsText('@resultMi', 'Misc')
            .api.back()
        yoodlizeOPage
    }
}

