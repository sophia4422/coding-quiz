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
  question: "What is the capital of Brazil?",
  answers: brasilAnswers;
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
  li1.textContent = "Brasilia";

  const li2 = document.createElement("li");
  li2.setAttribute("class", "answers");
  li2.textContent = "Rio de Janeiro";

  const li3 = document.createElement("li");
  li3.setAttribute("class", "answers");
  li3.textContent = "Sao Paulo";

  const li4 = document.createElement("li");
  li4.setAttribute("class", "answers");
  li4.textContent = "Ouro Preto";

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
//   console.log("started");
// };
// //declare function to execute every 1 sec
// //read 0 to stop game
// const countdown = () => {
//   //decrement timer value
//   //check if timer reachers 0
//   //if true render game over
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
