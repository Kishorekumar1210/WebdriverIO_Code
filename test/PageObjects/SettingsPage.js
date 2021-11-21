class SettingPage{

    get Account(){
        return $("[tabindex='0'] > button > span")
     }
 
     get Preference(){
        return $("[routerlink='/admin/account/preferences']")
     }

     get dropdown(){
         return $(".settings-content > .dropdown-select > .dropdown > .select > .icon > div > svg")
     }
 
     get clickonselecteddropdown(){
         return $(":nth-child(2) > .dropdown-menu-item-content > span")
     }
 
    get  clickCatalog(){
        return $("[routerlink='/admin/account/catalogs']")
     }
 
     get addCatalog(){
         return $(".d-flex > .button > button")
     }
 
     get closeCatalog(){
         return $(".wizard-header > .icon > div > svg")
     }
 
     get clickMembers(){
        return $("[routerlink='/admin/account/users']")
     }
 
     get inviteMembers(){
         return $(".users-header > .button > button")
     }
 
     get closeMember(){
         return $(".wizard-header > .icon > div > svg")
     }
 

}

module.exports = new SettingPage();