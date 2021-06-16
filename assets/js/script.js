document.addEventListener("DOMContentLoaded", function () {
    showQuestion();
    shuffleQuestion();
});

const newQuestion = document.getElementById("question");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
// const reTry = document.getElementById("reTry");
// const nextQ = document.getElementById("nextQ");
const score = document.getElementById("score");
const answerButtons = document.getElementById('answers');
const answered = [];


// event listeners for click amd keydown.

// document.getElementById("question").innerHTML = quizData[0].question;

// const lastQuestion = quizData.length - 1;

let currentQuestion = 0;

function showQuestion() {
    let q = quizData[currentQuestion];

    if(currentQuestion <= quizData.length-1){    
    newQuestion.innerHTML = q.question;
    answer1.innerHTML = q.answers.a;
    answer2.innerHTML = q.answers.b;
    answer3.innerHTML = q.answers.c;
    answer4.innerHTML = q.answers.d;
}
    else {
        //Show the end screen
        confirm("No more questions. Click ok to continue");
          }
}

// adding event listener to next q button, to iterate current q number and show next Q
document.getElementById("nextQ").addEventListener("click", nextQ);

function nextQ() {
    currentQuestion++;
    showQuestion();
}

function shuffleQuestion() {
//Function to change order of array to display questions

}




function runGame() {}

function checkAnswer() {};



function moveInGame() {};

function reTry() {};

function incrementScore() {}; {

}