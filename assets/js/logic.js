let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;

let questionEL = document.getElementById("questions");
let timerEl = document.getElementById("time");
let choicesEL = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialEL = document.getElementById("initials");
let feedBackEL = document.getElementById("feedback");

function questionClick(){
    if(this.value !== questions[currentQuestionIndex].answer){
        time -= 15;

        if(time < 0){
            time = 0;
        }

        timerEl.textContent = time;

        feedBackEL.textContent = "wrong"
    } else {
        feedBackEL.textContent = "correct!";
    }

    feedBackEL.setAttribute("class", "feedback");

    setTimeout(function(){
        feedBackEL.setAttribute("class","feedback hide")
    }, 1000);

    currentQuestionIndex++;

    if(currentQuestionIndex === questions.length){
        endQuiz()
    } else {
        getQuestions();
    }
}

function getQuestions(){
    let currentQuestion = questions[currentQuestionIndex];

    let titleEl = document.getElementById("question-title")

    titleEl.textContent = currentQuestion.title;

    choicesEL.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, index){
        let choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = `${index + 1}. ${choice}`

        choiceButton.addEventListener("click", questionClick);

        choicesEL.append(choiceButton);
    })
}

function endQuiz(){
    clearInterval(timerID);

    let endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    let finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    questionEL.setAttribute("class", "hide");
}

function timer(){
time--;
timerEl.textContent = time;
if (time <= 0){
    endQuiz();
}
}


function startQuiz(){
    let startScreenEL = document.getElementById("start-screen");
    startScreenEL.setAttribute("class","hide");

        questionEL.removeAttribute("class");

        timerID = setInterval(timer, 1000)

        timerEl.textContent = time;

        getQuestions();
}



function saveHighScore(){

}

function checkForEnter(event){

}
startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialEL.addEventListener("keyup", checkForEnter);