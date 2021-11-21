class LoginPage{


    get userName(){
       return $("input[type='text']")
    }

    get password(){

      return  $("input[type='password']")
    }

    get submit(){

      return $(".submit-button > button")
    }


}

module.exports = new LoginPage();