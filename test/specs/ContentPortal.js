
const loginPage = require('../PageObjects/loginPage')
const HomePage = require('../PageObjects/HomePage')
const SettingPage = require('../PageObjects/SettingsPage')

const fs = require('fs')
let testDataLogin = JSON.parse(fs.readFileSync("test/testData/DataParse.json"))


describe("Content Portal login page", function(){


    testDataLogin.forEach(({userName, Password}) => {
    it("login page with details", ()=>{

       browser.url("https://content-portal.productsup.com/login")
       console.log(browser.getTitle())
       expect(browser).toHaveTitleContaining("Content Portal")
       
       //LoginPage
       loginPage.userName.setValue(userName)
       loginPage.password.setValue(Password)
       loginPage.submit.click()
       browser.pause(3000)

       //Homepage actions
       HomePage.selectAll.click()
       HomePage.viewSelected.click()


       //Setting page actions
       SettingPage.Account.click()
       SettingPage.Preference.click()
       SettingPage.dropdown.click()
       SettingPage.clickonselecteddropdown.click()
       SettingPage.clickCatalog.click()
       SettingPage.addCatalog.click()
       SettingPage.closeCatalog.click()
       SettingPage.clickMembers.click()
       SettingPage.inviteMembers.click()
       SettingPage.closeMember.click()
       browser.closeWindow()
       

    });
       


    })


});