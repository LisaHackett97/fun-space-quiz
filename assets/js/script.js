document.addEventListener("DOMContentLoaded", function() { 
    displayFirstQ();
    displayFirstAnswerChoice();
});

// $("question").text("update question");
// console.log("#question")

// event listeners for click amd keydown.



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

