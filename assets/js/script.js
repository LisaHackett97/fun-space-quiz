/*jshint esversion: 6 */
/*globals $:false */
import quizData from './questions.js';

// set variables needed
const newQuestion = document.getElementById("question");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const correctAnswer = document.getElementById("correctAnswer");

let chosenAnswer;
let q;
let currentQuestion = 0;
let canvas = document.getElementById('gamecanvas');
let ctx = canvas.getContext('2d');

// adding event listener to next q button, to iterate current q number and show next Q
// Main pg button and on modals
document.getElementById("nextQ").addEventListener("click", nextQ);
document.getElementById("nextQ").addEventListener("key", nextQ);
document.getElementById("wrgAnsFocus").addEventListener("click", nextQ);
document.getElementById("wrgAnsFocus").addEventListener("key", nextQ);
document.getElementById("qfocus").addEventListener("click", nextQ);
document.getElementById("qfocus").addEventListener("key", nextQ);

document.addEventListener("DOMContentLoaded", function () {
  runGame();
});

// code on how to set focus to nextq button on modal, found on stackoverflow
$("#answerModal").on('shown.bs.modal', function (event) {
  $("#qfocus").focus().css("text-decoration", "underline");
});

$("#wrongAnswer").on('shown.bs.modal', function (event) {
  $("#wrgAnsFocus").focus().css("text-decoration", "underline");
});

// run the game. Shuffle fn called first so user doesn't see same q each time game is refreshed
function runGame() {
  shuffleQuestion();
  showQuestion();
}

// show a question 
function showQuestion() {
  q = quizData[currentQuestion];
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
    // $('#success').modal('show');
  }
}

// help with using the fisher-yates method
// https://www.tutorialspoint.com/
// https://bost.ocks.org/mike/shuffle/

function shuffleQuestion() {
  var x = quizData.length,
    temp, i;
  while (x) {
    i = Math.floor(Math.random() * x--);
    temp = quizData[x];
    quizData[x] = quizData[i];
    quizData[i] = temp;
  }
}

// iterate +1 to the current question variable, then run the show question function
// will show next question in the array QuizData
// including checkScoreDraw to draw on canvas as score increments
function nextQ() {
  currentQuestion++;
  showQuestion();
  scoreCheckDraw();
}

// when buttons within the div #answers clicked , set chosenAnswer to text of the button and run check fn
$('#answers > button').click(function (event) {
  chosenAnswer = $(this).text();
  event.preventDefault();
  check();
  });
// keyPress alternative
$('#answers > button').keypress(function (event) {
  chosenAnswer = $(this).text();
  event.preventDefault();
  check();
});

// check if answer chose matches text set for the correct answer
function check() {
  if (chosenAnswer == correctAnswer.innerText) {
    incrementScore();
    openAnswerModal();
  } else {
    wrongAnswerModal();
  }
}

//to Open modal when correct Answer selected
function openAnswerModal() {
  $('#answerModal').modal('show');
}

//to Open modal when incorrect Answer selected
function wrongAnswerModal() {
  $('#wrongAnswer').modal('show');
}

// show total number of questions answered correctly for current set 
function incrementScore() {
  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = ++oldScore;
}

// canvas code

// rocket img to use as mover in game
const rocketImg = new Image();
rocketImg.src = "assets/images/game-rocket.png";

// image to show progress in game
const completeImg = new Image();
completeImg.src = "assets/images/game-rocket-done.png";

// moon img appearing bottom left, use as starting point
const moonImage = new Image();
moonImage.src = "assets/images/game-moon.png";
moonImage.onload = function () {
  ctx.drawImage(moonImage, -71, 95, moonImage.width / 3, moonImage.height / 3);
};

// set image  for last position in game
const earthImage = new Image();
earthImage.src = "assets/images/game-earth.png";

// draw rocket after 1 question answered correctly
function drawQuestion1() {
  ctx.drawImage(rocketImg, 45, 120, rocketImg.width / 3.5, rocketImg.height / 3.5);
}

// draw next rocket after x questions answered correctly and overwrite prev img with darkened version
function drawQuestion2() {
  ctx.drawImage(rocketImg, 100, 87, rocketImg.width / 3.5, rocketImg.height / 3.5);
  ctx.drawImage(completeImg, 45, 120, completeImg.width / 3.5, completeImg.height / 3.5);
}

function drawQuestion3() {
  ctx.drawImage(rocketImg, 155, 57, rocketImg.width / 3.5, rocketImg.height / 3.5);
  ctx.drawImage(completeImg, 100, 87, completeImg.width / 3.5, completeImg.height / 3.5);
}

function drawQuestion4() {
  ctx.drawImage(rocketImg, 210, 27, rocketImg.width / 3.5, rocketImg.height / 3.5);
  ctx.drawImage(completeImg, 155, 57, completeImg.width / 3.5, completeImg.height / 3.5);
}

function drawQuestion5() {
  ctx.drawImage(earthImage, 255, -10, earthImage.width / 7, earthImage.height / 7);
  ctx.drawImage(completeImg, 210, 27, completeImg.width / 3.5, completeImg.height / 3.5);
}

// draw images on canvas for each score increment
function scoreCheckDraw() {
  let oldScore = parseInt(document.getElementById('score').innerText);
  if (oldScore === 0) {
    // do nothing

  } else if (oldScore === 1) {
    drawQuestion1();

  } else if (oldScore === 2) {
    drawQuestion2();

  } else if (oldScore === 3) {
    drawQuestion3();

  } else if (oldScore === 4) {
    drawQuestion4();

  } else if (oldScore === 5) {

    $('#success').modal('show');
    drawQuestion5();

  }
}

//event listener to start new game
document.querySelectorAll('.resetBtn').forEach(item => {
  item.addEventListener('click', event => {
    document.getElementById("score").innerText = 0;
    currentQuestion = 0;
    runGame();
    // clear canvas and re-draw moon start img
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(moonImage, -71, 95, moonImage.width / 3, moonImage.height / 3);
  });
});