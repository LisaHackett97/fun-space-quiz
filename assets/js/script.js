

document.addEventListener("DOMContentLoaded", function () {
  showQuestion();
  shuffleQuestion();
  // runGame();
  
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
let currentQuestion = 0;
let availableQ = [];
let quizArr = quizData;



// to add event listeners for click amd keydown.

// show a question 
function showQuestion() {
  const q = quizData[currentQuestion];
  
// if the current question number, less than lenght of array, show a question
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

// iterate +1 to the current question variable, then run the show question function
// will show next question in the array QuizData
function nextQ() {
  currentQuestion++;
  showQuestion();
}

// help with using the fisher-yates method
// https://www.tutorialspoint.com/
// https://bost.ocks.org/mike/shuffle/

function shuffleQuestion() {

var x = quizArr.length, temp, i;

while (x) {
   i = Math.floor(Math.random() * x--);
   temp = quizArr[x];
   quizArr[x] = quizArr[i];
   quizArr[i] = temp;
}

}




// function runGame() {
//   shuffle = quizData.sort(() => Math.random( -.5));
//   currentQuestion = 0;
//   nextQ();
  
// }

function checkAnswer() {};



function moveInGame() {};

function reTry() {};

function incrementScore() {}; {

}