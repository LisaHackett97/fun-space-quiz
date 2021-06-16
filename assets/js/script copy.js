
document.addEventListener("DOMContentLoaded", function() { 
    displayFirstQ();
    displayFirstAnswerChoice();
});

// const question = document.getElementById("question");
// const answer1 = document.getElementById("answer1");
// const answer2 = document.getElementById("answer2");
// const answer3 = document.getElementById("answer3");
// const answer4 = document.getElementById("answer4");
// const reTry = document.getElementById("reTry");
// const nextQ = document.getElementById("nextQ");
// const score = document.getElementById("score");
// $("question").text("update question");
// console.log("#question")

// event listeners for click amd keydown.
const lastQuestion = questions.length - 1;

let runningQuestion = 0;


function runGame() { 
}

// show the first quesion on load
function displayFirstQ() {
    document.getElementById("question").innerHTML = quizData[0].question;
}




// show the first set of answers //
function displayFirstAnswerChoice() { 
    document.getElementById("answer1").innerHTML = quizData[0].answers.a;
    document.getElementById("answer2").innerHTML = quizData[0].answers.b;
    document.getElementById("answer3").innerHTML = quizData[0].answers.c;
    document.getElementById("answer4").innerHTML = quizData[0].answers.d;
}




function checkAnswer() { };

function newQuestion(){ };

function moveInGame() { };

function reTry() { };

function incrementScore() { };

