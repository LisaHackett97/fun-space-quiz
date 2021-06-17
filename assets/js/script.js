document.addEventListener("DOMContentLoaded", function () {
  runGame();

});
// set variables needed

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
// const answer;
let answer = document.getElementsByClassName("answerButton");
let chosenAnswer;
// let chosenAnswer = document.getElementsByClassName("answerButton").innerHTML;
// let choice;
let currentQuestion = 0;
let availableQ = [];
let quizArr = quizData;
const q = quizData[currentQuestion];

const correctAnswer = quizData.correctAnswer;



// TO DO: to add event listeners for click and keydown.

// run the game. Shuffle fn called first so user doesn't see same q each time game is refreshed
function runGame() {
  shuffleQuestion();
  showQuestion();
}

// show a question 
function showQuestion() {
  const q = quizData[currentQuestion];
  // if the current question number, less than length of array, show a question
  if (currentQuestion <= quizData.length - 1) {
    newQuestion.innerHTML = q.question;
    answer1.innerHTML = q.answers.a;
    answer2.innerHTML = q.answers.b;
    answer3.innerHTML = q.answers.c;
    answer4.innerHTML = q.answers.d;
  } else {
    //Show the end screen
    confirm("No more questions. Click ok to continue");
  }
}

// help with using the fisher-yates method
// https://www.tutorialspoint.com/
// https://bost.ocks.org/mike/shuffle/

function shuffleQuestion() {
  var x = quizArr.length,
    temp, i;
  while (x) {
    i = Math.floor(Math.random() * x--);
    temp = quizArr[x];
    quizArr[x] = quizArr[i];
    quizArr[i] = temp;
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

$('#answers > button').click(function(event) {
   chosenAnswer = $(this).text();
   alert(chosenAnswer);
   event.preventDefault();
   check();
});

// funcrtion not yet accessing the correct answer from the array
function check(){
if (chosenAnswer !== q.correctAnswer){
      alert("woo")
    }
    alert("nope");
    console.log(chosenAnswer);
    console.log(correctAnswer);
  }





// function moveInGame() {};

// function reTry() {};

// function incrementScore() {}; {

// }