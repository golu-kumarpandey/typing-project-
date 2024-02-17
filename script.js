let timer = document.getElementById("timer")
let api_para = document.getElementById("api_para")
let text_aria = document.getElementById("quoteInput")
let result_para = document.getElementById("result")
let submitBtn = document.getElementById("submitBtn")
let restBtn = document.getElementById("restBtn")
let cont = 0
let setIntervalid = null

    submitBtn.addEventListener("click",function(){
        if (text_aria.value === api_para.textContent){
            clearInterval(setIntervalid)
            result_para.textContent = `You typed in ${cont} seconds`
        }else{
            result_para.textContent = "You typed incorrect sentence"

        }
        
    })


    let options = {
        method:"GET"
    }
    fetch("https://apis.ccbp.in/random-quote",options)
    .then(function(resoponse){
        return resoponse.json()
    })
    .then(function(jesondata){
       api_para.textContent = jesondata.content
    
        console.log(jesondata)
        if (api_para !== ""){
            setIntervalid = setInterval(function(){
                cont += 1
                timer.textContent = cont
       },1000)
        }
        
    })

    






