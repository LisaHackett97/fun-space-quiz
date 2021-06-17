document.addEventListener("DOMContentLoaded", function () {
  runGame();

});
// set variables needed

const newQuestion = document.getElementById("question");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const correctAnswer = document.getElementById("correctAnswer");
// const reTry = document.getElementById("reTry");
// const nextQ = document.getElementById("nextQ");
// let score = document.getElementById("score");
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

// let correctAnswer = q.correctAnswer;



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
    correctAnswer.innerHTML = q.correctAnswer;

   
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

// when buttons within the div #answers clicked, set chosenAnswer to text of the button and run check fn
$('#answers > button').click(function(event) {
   chosenAnswer = $(this).text();
   event.preventDefault();
   check();
  
});

// check if answer chose matches text set for the correct answer
function check(){
if (chosenAnswer == correctAnswer.innerText) {

  openAnswerModal();
  incrementScore();
 
} else {
// alert(":( wrg")
wrongAnswerModal();}
}

//to Open modal when correct Answer selected
function openAnswerModal (){
  $('#answerModal').modal('show');
}


//to Open modal when incorrect Answer selected
function wrongAnswerModal (){
  $('#wrongAnswer').modal('show');
}





// function moveInGame() {};

// function reTry() {};


// show total number of questions answered correctly for current set 
function incrementScore() { 
 let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = ++oldScore;}

// canvas code to test

let canvas = document.getElementById('gamecanvas');
let ctx = canvas.getContext('2d');

function drawQuestion1 (){
ctx.strokeStyle = "#d33f49"; 
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(10, 10);
ctx.stroke()
}

function drawQuestion2 (){
  ctx.strokeStyle = "#fee440"; 
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(20, 20);
  ctx.stroke()
  }

  function scoreCheckDraw (){
    let oldScore = parseInt(document.getElementById('score').innerText);
    if (oldScore === 1){
      drawQuestion1();
    }
    else {
      drawQuestion2();
      console.log(oldScore);
    }
  }




