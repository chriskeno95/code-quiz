
function timer() {
    var time = 100
    var countdown = setInterval(function (){
        if (time === 0){
            clearInterval(time)
        }
        timer.textContent = time
        time--
    }, 1000)
}

