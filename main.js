const hamburger = document.querySelector(".hamburger")
const navinfo = document.querySelector(".nav-info")

hamburger.addEventListener("click" , ()=> {
    navinfo.classList.toggle("display")
    hamburger.classList.toggle("not")
})


var countDownDate = new Date("Aug 31, 2024 00:00:00:00").getTime()
var x = setInterval(function(){
    var now = new Date().getTime()
    var distance =  countDownDate - now
    
    // var days = Math.floor(distance / (1000*60*60*24))
    var hours = Math.floor((distance /(1000*60*60)))
    var minutes = Math.floor((distance % (1000*60*60))/(1000*60))
    var seconds = Math.floor((distance % (1000*60))/(1000))

    // document.getElementById("days").innerHTML = days+"d"
    document.querySelector(".hours").innerHTML = hours+"h"
    document.querySelector(".minutes").innerHTML = minutes+"m"
    document.querySelector(".seconds").innerHTML = seconds+"s"

    if(distance < 0) {
        clearInterval(x)
    document.getElementById("days").innerHTML = "00"
    document.querySelector(".hours").innerHTML = "00"
    document.querySelector(".minutes").innerHTML = "00"
    document.querySelector(".seconds").innerHTML = "00"

    }

},1000)