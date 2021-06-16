
document.addEventListener("DOMContentLoaded", function () {
    showQuestion();
});

const newQuestion = document.getElementById("question");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
// const reTry = document.getElementById("reTry");
const nextQ = document.getElementById("nextQ");
const score = document.getElementById("score");
const answerButtons = document.getElementById('answers')


// event listeners for click amd keydown.

// document.getElementById("question").innerHTML = quizData[0].question;

const lastQuestion = quizData.length - 1;

let currentQuestion = 1;
// for (let i=0; i < quizData.length; i++){
//     currentQuestion += 1;
// }

function showQuestion() {
    let q = quizData[currentQuestion];

    newQuestion.innerHTML = q.question;
        answer1.innerHTML = q.answers.a;
        answer2.innerHTML = q.answers.b;
        answer3.innerHTML = q.answers.c;
        answer4.innerHTML = q.answers.d;
}

function nextQ(){
    // when button clicked, add 1 to currentQuestion variable and run showQuestion fn
}

// nextQ.onclick = ()=> {
//     if(currentQuestion < lastQuestion) {
//         currentQuestion++;
//         showQuestion(currentQuestion);
//     }
// }

            function runGame() {}

            function checkAnswer() {};



            function moveInGame() {};

            function reTry() {};

            function incrementScore() {};