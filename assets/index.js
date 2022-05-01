// I click 'Start Quiz'
const startButton = document.getElementById("start-btn");

//target the general knowledge / start section to remove it
const startSection = document.getElementById("start-quiz-banner");

//target main section
const mainSection = document.getElementById("main");

//answers
const allAnswers1 = ["Brasilia", "Rio De Janeiro", "Sao Paulo", "Ouro Preto"];

const allAnswers2 = [
  "HyperText Market Linkup",
  "HyperText Markup Language",
  "Homepage Text Modem Language",
  "How The Market Looks",
];

const allAnswers3 = [
  "Yellow, Black & Green",
  "Red, Yellow & Green",
  "Black, Red & Yellow",
  "Black, Red & Green",
];

const allAnswers4 = [
  "Bruno L. Marshall",
  "Bruno Jupiter",
  "Michael Perez",
  "Peter Gene Hernandez",
];

//current question index
let questionIndex = 0;

//array for questions
const allQuestions = [
  {
    text: "What is the capital of Brazil?",
    allAnswers1,
  },
  {
    text: "What does HTML stand for?",
    allAnswers2,
  },
  {
    text: "What colours make up the Jamaican flag?",
    allAnswers3,
  },
  {
    text: "What is Bruno Mars' real name?",
    allAnswers4,
  },
];

const startQuiz = () => {
  console.log("start button clicked");
  // The 'General Knowledge' / start section Page disappears
  removeStartSection();
  // Render first question
  renderQuestion();

  //NEED TO RENDER TIMER and comment it out in html
};

//function to remove general know / start section on page
const removeStartSection = () => {
  console.log("remove start section");
  startSection.remove();
};

const handleOptionClick = () => {
  console.log("clicked inside question section");
};

const renderQuestion = () => {
  console.log("render question");
  //dynamically build question section and add options

  //get current question
  const currentQuestion = allQuestions[questionIndex];

  //create section
  const section = document.createElement("section");
  section.setAttribute("class", "question-container");

  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "question-title");
  //this question is going to change to be dynamic
  h2.textContent = currentQuestion.text;

  //creat ul and append 4 lis
  const ul = document.createElement("ul");
  ul.setAttribute("class", "answer-container");

  //call a function to get list items
  //loop over options to create and append li to ul
  const li1 = document.createElement("li");
  li1.setAttribute("class", "answers-item");
  li1.textContent = currentQuestion.allAnswers1[0];

  const li2 = document.createElement("li");
  li2.setAttribute("class", "answers-item");
  li2.textContent = currentQuestion.allAnswers1[1];

  const li3 = document.createElement("li");
  li3.setAttribute("class", "answers-item");
  li3.textContent = currentQuestion.allAnswers1[2];

  const li4 = document.createElement("li");
  li4.setAttribute("class", "answers-item");
  li4.textContent = currentQuestion.allAnswers1[3];

  //append lis to parent
  ul.append(li1, li2, li3, li4);

  //append h2 and ul to section
  section.append(h2, ul);

  //append question section to the main (parent)
  mainSection.append(section);

  //add event listener on question section
  section.addEventListener("click", handleOptionClick);
};

startButton.addEventListener("click", startQuiz);
