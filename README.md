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

//array of questions
const questions = [
{
question: "What is the capital of Brazil?",
answers: [
{ text: 'Brasilia', correct: true },
{ text: 'Rio de Janeiro', correct: false},
{ text: 'Sao Paulo', correct: false},
{ text: 'Ouro Preto', correct: false},
]
},
{
question: "What does HTML stand for?",
answers: [
{ text: 'HyperText Markup Language', correct: true },
{ text: 'HyperText Market Linkup', correct: false},
{ text: 'Homepage Text Modem Language', correct: false},
{ text: 'How The Market Looks', correct: false},
]
},
{
question: "What colours make up the Jamaican flag?",
answers: [
{ text: 'Yellow, Black & Green', correct: true },
{ text: 'Red, Yellow & Green', correct: false},
{ text: 'Black, Red & Yellow', correct: false},
{ text: 'Black, Red & Green', correct: false},
]
},
{
question: "What is Bruno Mars' real name?",
answers: [
{ text: 'Peter Gene Hernandez', correct: true },
{ text: 'Michael Perez', correct: false}
{ text: 'Bruno Jupiter', correct: false}
{ text: 'Bruno L. Marshall', correct: false}
]
},
];

#####

// Page loads 'General Knowledge quiz'

// I click 'Start Quiz'
const startButton = document.getElementById("start-btn");

//target the general knowledge / start section to remove it
const startSection = document.getElementById("start-quiz-banner");

//target main section - for appending later
const mainElement = document.getElementById("main");

//current question index
let questionIndex = 0;

//answers for each question
const brasilAnswers = ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Ouro Petro"]

//array of questions
const questions = [
{
text: "What is the capital of Brazil?",
answers: brasilAnswers;
},
];

//target question section

//target timer section

//function to render question on page
const renderQuestion = () => {
console.log("render question 1");

//get current question
const currentQuestion = questions(questionIndex);

//create section
const section = document.createElement("section");
section.setAttribute("class", "question-container");

//create h2
const h2 = document.createElement("h2");
section.setAttribute("class", "question");
// questions need to be in an array
h2.textContent = currentQuestion.text;

//create ul and append 4 li
const ul = document.createElement("ul");
ul.setAttribute("class", "answer-container");

const li1 = document.createElement("li");
li1.setAttribute("class", "answers");
li1.textContent = currentQuestion.brasilAnswers[0];

const li2 = document.createElement("li");
li2.setAttribute("class", "answers");
li2.textContent = currentQuestion.brasilAnswers[1];

const li3 = document.createElement("li");
li3.setAttribute("class", "answers");
li3.textContent = currentQuestion.brasilAnswers[2];

const li4 = document.createElement("li");
li4.setAttribute("class", "answers");
li4.textContent = currentQuestion.brasilAnswers[4];

ul.append(li1, li2, li3, li4);

//append h2 and ul to section
section.append(h2, ul);

//append question section to main element
mainElement.append(section);
};

//function to remove general know / start section on page
const removeStartSection = () => {
console.log("remove start section");
startSection.remove();
};

const startQuiz = () => {
console.log("start button clicked");
// The 'General Knowledge' / start section Page disappears
removeStartSection();
// Render first question
renderQuestion();
//the timer and the answers

// The timer starts to count down
};

startButton.addEventListener("click", startQuiz);

// const renderTimerSection = () => {};
// // use html as guide and build in JS
// //append section to main

// const renderQuestionSection = () => {};
// // use html as guide and build in JS
// //append section to main
// // add click event listener on question-section

// const startTimer = () => {
// console.log("started");
// };
// //declare function to execute every 1 sec
// //read 0 to stop game
// const countdown = () => {
// //decrement timer value
// //check if timer reachers 0
// //if true render game over
// };
// //setInterval to 1000ms (1s)

// // I click an answer
// // If the answer is correct, the next question loads
// // If the answer is wrong, the next question loads and -10 seconds is deducted from the timer

// // Once I have finished all the questions
// // Or the timer runs out
// // Then the form page loads
// // I enter my name and my score is displayed

// //If I click home, the 'General Knowledge Quiz' page loads
// // If I click 'High Scores' my names / scores are pulled from LS and displayed (???)
