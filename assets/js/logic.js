let currentQuestionIndex = 0;
let time = question.length * 15;
let timerID;

let questionEL = document.getElementById("questions");
let timerEl = document.getElementById("time");
let choicesEL = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialEL = document.getElementById("initials");
let feedBackEL = document.getElementById("feedback");





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

