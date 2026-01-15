var hour = 0;
var min = 0;
var sec = 0;
var interval = "";
var hourHead = document.querySelector("#hour")
var minHead = document.querySelector("#min")
var secHead = document.querySelector("#sec")

function timer() {
    sec++
    secHead.textContent = sec
    secHead.textContent = sec < 10 ? '0' + sec : sec


    if (sec >= 59) {
        min++;
        minHead.textContent = min
        minHead.textContent = min < 10 ? '0' + min + ":" : min + ":"
        sec = 0
    }

    else if (min >= 59) {
        hour++;
        hourHead.textContent = hour
        hourHead.textContent = hour < 10 ? '0' + hour + ":" : hour + ":"
        min = 0
    }

}
function start() {
    if(interval !== ""){
        return
    }else{
        interval = setInterval(timer, 1000)
    }
}
function stop(){
    clearInterval(interval)
    interval = ""
}

function reset(){
    clearInterval(interval)   
    sec = 0;
    min = 0;
    hour = 0
    hourHead.textContent = '00:'
    minHead.textContent = '00:'
    secHead.textContent = '00'
    interval = ""
}