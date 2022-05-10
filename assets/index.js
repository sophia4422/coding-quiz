//________________________

//1. target the start button
const startButton = document.getElementById("start-btn");

//4. target the general knowledge / start section to remove it
const startSection = document.getElementById("start-quiz-banner");

//8. target main element
const mainElement = document.getElementById("main");

//28. all questions array
const questions = [
  {
    text: "What is the capital of Brazil?",
    options: ["Brasilia", "Rio de Janeiro", "São Paulo", "Ouro Preto"],
    correctAnswer: "Brasilia",
  },
  {
    text: "What does HTML stand for?",
    options: [
      "HyperText Market Linkup",
      "Homepage Text Modem Language",
      "How The Market Looks",
      "HyperText Markup Language",
    ],
    correctAnswer: "HyperText Markup Language",
  },
  {
    text: "What colours make up the Jamaican flag?",
    options: [
      "Red, Yellow & Green",
      "Black, Red & Yellow",
      "Black, Red & Green",
      "Yellow, Black & Green",
    ],
    correctAnswer: "Yellow, Black & Green",
  },
  {
    text: "What is Bruno Mars' real name?",
    options: [
      "Bruno L. Marshall",
      "Peter Gene Hernandez",
      "Bruno Jupiter",
      "Michael Perez",
    ],
    correctAnswer: "Peter Gene Hernandez",
  },
];

//26. current question index
let questionIndex = 0;

//7.3 timer
let timer = 10 * questions.length;

//7.4 target timer span
let timerSpan;
let timerId;

//local storage function
const getFromLocalStorage = (key, defaultValue) => {
  //get from LS using key name
  const dataFromLS = localStorage.getItem(key);

  //parse data from LS
  const parsedData = JSON.parse(dataFromLS);

  if (parsedData) {
    return parsedData;
  } else {
    return defaultValue;
  }
};

//push to LS
const writeToLocalStorage = (key, value) => {
  //convert value to string
  const stringifiedValue = JSON.stringify(value);

  //set stringified value to LS for keyname
  localStorage.setItem(key, stringifiedValue);
};

//42. function to remove question section
const removeBanner = () => {
  startSection.remove();
};

//36. handleOptionClick function to handle click events in question section
const handleOptionClick = (event) => {
  //37. get current target
  const currentTarget = event.currentTarget;
  //38. get target
  const target = event.target;

  //39. check that click only comes from the li
  if (target.tagName === "LI") {
    const correctAnswer = questions[questionIndex].correctAnswer;
    const userAnswer = target.getAttribute("data-value");

    if (correctAnswer !== userAnswer) {
      timer -= 10;
    }

    removeQuestion();

    if (questionIndex < questions.length - 1) {
      // if not last question

      questionIndex += 1;

      renderQuestion();
    } else {
      // stop timer
      clearInterval(timerId);

      renderForm();
    }
  }
};

// remove the rendered question if exists
const removeQuestion = () => {
  if (document.getElementById("question-container")) {
    document.getElementById("question-container").remove();
  }
};

//6. function to render question to page
const renderQuestion = () => {
  //29. get current question
  const currentQuestion = questions[questionIndex];

  //9. create section
  section = document.createElement("section");
  //12. set class attribute for section
  section.setAttribute("class", "question-container");
  section.setAttribute("id", "question-container");
  //10. create h2
  const h2 = document.createElement("h2");
  //13. set class attribute for h2
  h2.setAttribute("class", "question-title");
  //15. set h2 text content
  h2.textContent = currentQuestion.text;
  //11. create ul and append 4 lis
  const ul = document.createElement("ul");
  //14. set class attribute for ul
  ul.setAttribute("class", "answer-container");

  //16. loop over options to create and append li to ul

  //17.create four list items, li1:
  const li1 = document.createElement("li");
  //18. set class attribute for li1
  li1.setAttribute("class", "answers-item");
  li1.setAttribute("data-value", currentQuestion.options[0]);
  //19/30. set h2 text content
  li1.textContent = currentQuestion.options[0];

  //20. li2:
  const li2 = document.createElement("li");
  li2.setAttribute("class", "answers-item");
  li2.setAttribute("data-value", currentQuestion.options[1]);
  //31. answers taken from array
  li2.textContent = currentQuestion.options[1];

  //21. li3:
  const li3 = document.createElement("li");
  li3.setAttribute("class", "answers-item");
  li3.setAttribute("data-value", currentQuestion.options[2]);
  //32.
  li3.textContent = currentQuestion.options[2];

  //22. li4:
  const li4 = document.createElement("li");
  li4.setAttribute("class", "answers-item");
  li4.setAttribute("data-value", currentQuestion.options[3]);
  //33.
  li4.textContent = currentQuestion.options[3];

  //23. append all lis to parent (ul)
  ul.append(li1, li2, li3, li4);

  //24. append h2 and ul to section
  section.append(h2, ul);

  //25. append question section to main parent
  mainElement.append(section);

  //34. add event listener on question section
  section.addEventListener("click", handleOptionClick);
};

//7. Render timer
const renderTimer = () => {
  const timerSection = document.createElement("section");
  timerSection.setAttribute("id", "section-timer");
  timerSection.setAttribute("class", "timer-section");

  const timeRemaining = document.createElement("div");
  timeRemaining.textContent = "Time Remaining: ";

  timerSpan = document.createElement("span");
  //set class attribute for span
  timerSpan.setAttribute("id", "timer-span");
  //set timer span text content
  timerSpan.textContent = timer;

  //append span to div
  timeRemaining.append(timerSpan);

  //append div to section
  timerSection.append(timeRemaining);

  //append section to main
  mainElement.append(timerSection);
};

//7. function to start timer
//this is a callback function
const startTimer = () => {
  //7.2 function for updateTimerValue
  const updateTimerValue = () => {
    //decrement timer by 1
    timer -= 1;

    timerSpan.textContent = timer;

    //check if timer is equal to 0
    if (timer <= 0) {
      clearInterval(timerId);
      alert("Game Over!");
      removeQuestion();
    }

    //set text to new timer value
    timerSpan.textContent = timer > 0 ? timer : 0;
  };

  //7.1 repeat code for fixed interval
  timerId = setInterval(updateTimerValue, 1000);
};

//3. declare the event handler function for the start button click
const startQuiz = () => {
  //5. remove question banner
  removeBanner();
  //7. render timer
  renderTimer();
  //6. render first question
  renderQuestion();
  //8.start timer
  startTimer();
};

//41. function to render form
const renderForm = () => {
  //remove the timer
  // document.getElementById("section-timer").remove();

  const formSection = document.createElement("section");
  formSection.setAttribute("class", "form-container");
  formSection.setAttribute("id", "form-section");

  //create form
  const form = document.createElement("form");
  // set id attribute for form since it has no css
  form.setAttribute("id", "form-box");

  //create div and append label and input
  const divForInput = document.createElement("div");
  //set id attribute for div
  divForInput.setAttribute("id", "full-name");

  //create input
  const input = document.createElement("input");
  //18. set id attribute for input
  input.setAttribute("id", "full-name-input");
  input.setAttribute("placeholder", "Enter full name");

  //append LABEL and iNPUT to DIV
  divForInput.append(input);

  //create div and create button
  const divForButton = document.createElement("div");
  //set class attribute for div
  divForButton.setAttribute("class", "submit-container");
  //set id attribute for div
  divForButton.setAttribute("id", "submit-box");

  //create button
  const button = document.createElement("button");
  //set class attribute for submit button
  button.setAttribute("class", "submit-button");
  //set id attribute for submit button
  button.setAttribute("id", "button-submit");
  button.textContent = "Submit";

  //append BUTTON TO DIV
  divForButton.append(button);

  //append DIV to FORM
  form.append(divForInput, divForButton);

  //append FORM to SECTION
  formSection.append(form);

  //append section to main section
  mainElement.append(formSection);

  // add event listener to form
  form.addEventListener("submit", handleFormSubmission);
};

const handleFormSubmission = (event) => {
  event.preventDefault();

  //get the name
  const fullName = document.getElementById("full-name-input").value;

  //create object
  const scoreObject = {
    fullName: fullName,
    score: timer,
  };

  const highscores = getFromLocalStorage("highscores", []);

  highscores.push(scoreObject);

  writeToLocalStorage("highscores", highscores);
};

//2. event listener for the start button
// this is called a higher order function
startButton.addEventListener("click", startQuiz);
