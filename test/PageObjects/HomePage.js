class homePage{


    get selectAll(){
        return $(".ml-2 > button")
    }

    get viewSelected(){

        return $(".status > button > span")
    }

}


module.exports = new homePage();