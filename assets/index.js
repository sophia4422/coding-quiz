// // I click 'Start Quiz'
// const startButton = document.getElementById("start-btn");

// //target the general knowledge / start section to remove it
// const startSection = document.getElementById("start-quiz-banner");

// //target main section
// const mainSection = document.getElementById("main");

// //answers
// const allAnswers1 = ["Brasilia", "Rio De Janeiro", "Sao Paulo", "Ouro Preto"];

// const allAnswers2 = [
//   "HyperText Market Linkup",
//   "HyperText Markup Language",
//   "Homepage Text Modem Language",
//   "How The Market Looks",
// ];

// const allAnswers3 = [
//   "Yellow, Black & Green",
//   "Red, Yellow & Green",
//   "Black, Red & Yellow",
//   "Black, Red & Green",
// ];

// const allAnswers4 = [
//   "Bruno L. Marshall",
//   "Bruno Jupiter",
//   "Michael Perez",
//   "Peter Gene Hernandez",
// ];

// //current question index
// let questionIndex = 0;

// //array for questions
// const allQuestions = [
//   {
//     text: "What is the capital of Brazil?",
//     allAnswers1,
//   },
//   {
//     text: "What does HTML stand for?",
//     allAnswers2,
//   },
//   {
//     text: "What colours make up the Jamaican flag?",
//     allAnswers3,
//   },
//   {
//     text: "What is Bruno Mars' real name?",
//     allAnswers4,
//   },
// ];

// const startQuiz = () => {
//   console.log("start button clicked");
//   // The 'General Knowledge' / start section Page disappears
//   removeStartSection();
//   // Render first question
//   renderQuestion();

//   //NEED TO RENDER TIMER and comment it out in html
// };

// //function to remove general know / start section on page
// const removeStartSection = () => {
//   console.log("remove start section");
//   startSection.remove();
// };

// //removes question section from page
// const removeQuestion = () => {
//   console.log("remove question");
//   document.getElementById("question-container").remove;
// };

// //event handler function to handle click events in question section
// const handleOptionClick = (event) => {
//   console.log("clicked inside question section");

//   //get current target
//   const currentTarget = event.currentTarget;
//   //get target
//   const target = event.target;

//   //see if click is only in LI
//   //check if target element is li element
//   if (target.tagName === "LI") {
//     //get the option the user clicked on
//     const value = target.getAttribute("data-value");
//     console.log(value); //I will use this for the score
//     // get the question the user answered
//     const question = allQuestions[questionIndex].text;
//     console.log(question);
//     // build an answer object that contains question and answer
//     // i can now put this object in an array
//     const answer = {
//       question: question,
//       value: value,
//     };
//   }
// };

// //go to next question if not the last question
// // if last question render results
// //remove question
// removeQuestion();
// if (questionIndex < allQuestions.length - 1) {
//   // go to next question
//   //increment question index by one
//   questionIndex += 1;

//   //render question
//   renderQuestion();
// } else {
//   // if last question render results and form
//   // remove last question
//   renderResults();

//   renderForm();
// }

// //STORE ANSWER IN LOCAL STORAGE

// //function to render results
// const renderResults = () => {
//   console.log("results");
// };

// //function to render form
// const renderForm = () => {
//   console.log("render form");
// };

// const renderQuestion = () => {
//   console.log("render question");
//   //dynamically build question section and add options

//   //get current question
//   const currentQuestion = allQuestions[questionIndex];

//   //create section
//   const section = document.createElement("section");
//   section.setAttribute("class", "question-container");
//   section.setAttribute("id", "question-container");

//   //create h2
//   const h2 = document.createElement("h2");
//   h2.setAttribute("class", "question-title");
//   //this question is going to change to be dynamic
//   h2.textContent = currentQuestion.text;

//   //creat ul and append 4 lis
//   const ul = document.createElement("ul");
//   ul.setAttribute("class", "answer-container");

//   //call a function to get list items
//   //loop over options to create and append li to ul
//   const li1 = document.createElement("li");
//   li1.setAttribute("class", "answers-item");
//   li1.setAttribute("data-value", currentQuestion.allAnswers1[0]);
//   li1.textContent = currentQuestion.allAnswers1[0];

//   const li2 = document.createElement("li");
//   li2.setAttribute("class", "answers-item");
//   li2.setAttribute("data-value", currentQuestion.allAnswers1[1]);
//   li2.textContent = currentQuestion.allAnswers1[1];

//   const li3 = document.createElement("li");
//   li3.setAttribute("class", "answers-item");
//   li3.setAttribute("data-value", currentQuestion.allAnswers1[2]);
//   li3.textContent = currentQuestion.allAnswers1[2];

//   const li4 = document.createElement("li");
//   li4.setAttribute("class", "answers-item");
//   li4.setAttribute("data-value", currentQuestion.allAnswers1[3]);
//   li4.textContent = currentQuestion.allAnswers1[3];

//   //append lis to parent
//   ul.append(li1, li2, li3, li4);

//   //append h2 and ul to section
//   section.append(h2, ul);

//   //append question section to the main (parent)
//   mainSection.append(section);

//   //add event listener on question section
//   section.addEventListener("click", handleOptionClick);
// };

// startButton.addEventListener("click", startQuiz);

//________________________

//1. target the start button
const startButton = document.getElementById("start-btn");

// . target the general knowledge / start section to remove it
const startSection = document.getElementById("start-quiz-banner");

//declare the event handler function for the start button click
const handleStartButtonClick = () => {};

//2. event listener for the start button
startButton.addEventListener("click", startQuiz);
