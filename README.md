# coding-quiz

Beat the timer to answer all the questions

NAV BAR:
Home - take you to the home - where it says start quiz
High Scores - All scores are loaded from LS with name
~Go back: takes you to home page | Clear: clears high scores in LS
~When you load page with no high scores, a render message says 'No Scores' appear

What do I want to do?

-Page loads
-Start Button
-Click Start Button:
~Timer starts to count down
~First question appears with 4 answer choices

-Click an answer choice
~If right: next question
~If wrong: time is deducted, go to next question

Meanwhile:
Timer is going down
Your score is being tracked
The current question you are on is being tracked

# Questions ~ random knowledge

Question 1: What is the capital of Brazil?
Answers: Brasilia, Rio de Janeiro, Sao Paulo, Ouro Preto

Question 2: What does HTML stand for?
Answers: HyperText Market Linkup, HyperText Markup Language, Homepage Text Modem Language, How The Market Looks

Question 3: What colours make up the Jamaican flag?
Answers: Yellow, Black & Green / Red, Yellow & Green / Black, Red & Yellow / Black, Red & Green

Question 4: What is Bruno Mars' real name?
Answers: Bruno L. Marshall, Bruno Jupiter, Michael Perez, Peter Gene Hernandez

###

GAME OVER:
-When all questions are answered
-When remaining time reaches 0
~Stop timer, render form

FORM:
-Please enter full name:
-Your Score is \*\*
Submit
/Store score in LS

#########
JAVASCRIPT NOTES

const startButton = document.getElementById('start-btn')

startButton.addEventListener('click', startQuiz)

//the penalty is -5 seconds

if () {}
// if the counter is === a minus number then render game over page

//global declarations
const questions = [
{
question: "What is the capital of Brazil?",
answers: [
{ text: 'Brasilia', correct: true },
{ text: 'Rio de Janeiro', correct: false}
{ text: 'Sao Paulo', correct: false}
{ text: 'Ouro Preto', correct: false}
]
}
];
let timerValue = 10 \* questions.length;

const onLoad = () => {};
// initialise local storage
// check if highscores exists in LS
// if false then set highscores to empty array in LS

const removeStartSection = () => {};

const startTimer = () => {
console.log('started')
};
//declare function to execute every 1 sec
//read 0 to stop game
const countdown = () => {
//decrement timer value
//check if timer reachers 0
//if true render game over
};
//setInterval to 1000ms (1s)

const validateAnswer = () => {
//get answer clicked from user
// get the correct answer for question
// compare the 2 answers
// if incorrect subtract 5 seconds from timerValue
// if incorrect render error alert with message and status
// Go to next question
// if correct render success alert with message and status
// go to next question
};

const renderTimerSection = () => {};
// use html as guide and build in JS
//append section to main

const renderQuestionSection = () => {};
// use html as guide and build in JS
//append section to main
// add click event listener on question-section

const renderGameOver = () => {};
// use html as guide and build in JS
//append section to main

const renderAlert = (message, status) => {};
//append to main div to #question-section

const startQuiz = () => {};
//remove start section

//start timer

//render time section
