// I click 'Start Quiz'
const startButton = document.getElementById("start-btn");

//target the general knowledge / start section to remove it
const startSection = document.getElementById("start-quiz-banner");

//target main section
const mainSection = document.getElementById("main");

const startQuiz = () => {
  console.log("start button clicked");
  // The 'General Knowledge' / start section Page disappears
  removeStartSection();
  // Render first question
  renderQuestion();
  //the timer and the answers

  // The timer starts to count down
};

//function to remove general know / start section on page
const removeStartSection = () => {
  console.log("remove start section");
  startSection.remove();
};

const renderQuestion = () => {
  console.log("render question");
  //dynamically build question section and add options
  //append question section to the main (parent)

  //create section
  const section = document.createElement("section");
  section.setAttribute("class", "question-container");

  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "question-title");
  //this question is going to change to be dynamic
  h2.textContent = "What is the capital of Brazil?";

  //creat ul and append 4 lis
  const ul = document.createElement("ul");
  ul.setAttribute("class", "answer-container");

  //call a function to get list items
  //loop over options to create and append li to ul
  const li1 = document.createElement("li");
  li1.setAttribute("class", "answers-item");
};

startButton.addEventListener("click", startQuiz);
