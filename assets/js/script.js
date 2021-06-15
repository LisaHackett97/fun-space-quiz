let quizData = [
    {
        question: "Which is the first planet in the solar system from the sun?",
        answers: {
            a: "Venus",
            b: "Saturn",
            c: "Jupiter",
            d: "Mercury"
        },
        correctAnswer: 'd'
    },

    {
        question: "Which is the first planet in the solar system from the sun?",
        answers: {
            a: "It doesn't have one",
            b: "None of these",
            c: "The light from the sun reflects directly on the surface",
            d: "Venus is covered with a thick layer of clouds"
        },
        correctAnswer: 'd'
    },

    {
        question: "The second largest moon in our solar system is a natural satellite of Saturn. What is its name?",
        answers: {
            a: "Titan ",
            b: "Europa",
            c: "Rhea",
            d: " Mimas"
        },
        correctAnswer: 'a'
    }

];

document.addEventListener("DOMContentLoaded", function() { 
    // let quizData = [];
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

