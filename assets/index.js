// Page loads 'General Knowledge quiz'

// I click 'Start Quiz'
const startButton = document.getElementById("start-btn");

//target the general knowledge / start section to remove it
const startSection = document.getElementById("start-quiz-banner");

//function to render question on page
const renderQuestion = () => {
  console.log("render question 1");
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
