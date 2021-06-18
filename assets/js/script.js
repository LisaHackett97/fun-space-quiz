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
// including checkScoreDraw to draw on canvas as score increments
function nextQ() {
  currentQuestion++;
  showQuestion();
  scoreCheckDraw();
}

// when buttons within the div #answers clicked, set chosenAnswer to text of the button and run check fn
$('#answers > button').click(function (event) {
  chosenAnswer = $(this).text();
  event.preventDefault();
  check();

});

// check if answer chose matches text set for the correct answer
function check() {
  if (chosenAnswer == correctAnswer.innerText) {

    openAnswerModal();
    incrementScore();

  } else {
    // alert(":( wrg")
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





// function moveInGame() {};

// function reTry() {};


// show total number of questions answered correctly for current set 
function incrementScore() {
  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = ++oldScore;
}

// canvas code

let canvas = document.getElementById('gamecanvas');
let ctx = canvas.getContext('2d');

// rocket img to use as mover in game
const rocketImg = new Image();
rocketImg.src = "../assets/images/game-rocket.png";
// rocketImg.onload = function () {
//   ctx.drawImage(rocketImg, 50, 100, rocketImg.width / 2.5, rocketImg.height / 2.5);
// };
// moon img appearing bottom left, use as starting point
const moonImage = new Image();
moonImage.src = "../assets/images/game-moon.png";
moonImage.onload = function () {
  ctx.drawImage(moonImage, -71, 95, moonImage.width / 3, moonImage.height / 3);
};

const earthImage = new Image();
earthImage.src = "../assets/images/game-earth.png";



function drawQuestion1() {
  ctx.drawImage(rocketImg, 45, 120, rocketImg.width / 3.5, rocketImg.height / 3.5);
}

function drawQuestion2() {
  ctx.drawImage(rocketImg, 100, 87, rocketImg.width / 3.5, rocketImg.height / 3.5);
}

function drawQuestion3() {
  ctx.drawImage(rocketImg, 155, 57, rocketImg.width / 3.5, rocketImg.height / 3.5);
}

function drawQuestion4() {
  ctx.drawImage(rocketImg, 210, 27, rocketImg.width / 3.5, rocketImg.height / 3.5);
}

function drawQuestion5() {
 
  ctx.drawImage(earthImage, 240, -30, earthImage.width / 4.5, earthImage.height / 4.5);
  // ctx.drawImage(rocketImg, 265, 0, rocketImg.width / 3.5, rocketImg.height / 3.5);
}

function tempDrawLinePath() {

  drawQuestion1();
  drawQuestion2();
  drawQuestion3();
  drawQuestion4();
  drawQuestion5();

}

// draw line on canvas for each score increment

function scoreCheckDraw() {
  let oldScore = parseInt(document.getElementById('score').innerText);
  if (oldScore === 1) {
    drawQuestion1();
  } else if (oldScore === 2) {
    drawQuestion2();

  } else if (oldScore === 3) {
    drawQuestion3();

  } else if (oldScore === 4) {
    drawQuestion4();

  } else if (oldScore === 5) {
    drawQuestion5();

  } else {
    confirm("game over");
  }
}