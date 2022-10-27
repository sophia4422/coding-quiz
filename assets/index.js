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
    text: "What is Nicki Minaj's real name?",
    options: ["Onika Minak", "Roman Zolanski", "Onika Maraj", "Nicole Roman"],
    correctAnswer: "Onika Maraj",
  },
  {
    text: "Where is Drake from?",
    options: [
      "Malibu, California",
      "Vancouver, Canada",
      "Queens, New York",
      "Toronto, Canada",
    ],
    correctAnswer: "Toronto, Canada",
  },
  {
    text: "How many Grammys has Beyoncé won?",
    options: ["5", "28", "102", "34"],
    correctAnswer: "28",
  },
  {
    text: "What is Rihanna's cosmetic company called?",
    options: [
      "Makeup by Rihanna",
      "Fenty Beauty",
      "Rih Rih Cosmetics",
      "Navy Beauty",
    ],
    correctAnswer: "Fenty Beauty",
  },
  {
    text: "Who wrote the 2016 album titled: Blonde ?",
    options: [
      "The Weeknd",
      "Megan Thee Stallion",
      "Justin Bieber",
      "Frank Ocean",
    ],
    correctAnswer: "Frank Ocean",
  },
];

//26. current question index
let questionIndex = 0;

let quizComplete = false;

//7.3 timer
let timer = 10 * questions.length;

//7.4 target timer span
let timerSpan;
let timerId;

const renderAlert = (answerStatus) => {
  const confirmResult = document.createElement("h2");
  confirmResult.setAttribute("class", "confirm-result");
  if (answerStatus == "Correct") {
    confirmResult.setAttribute("id", "correct");
    confirmResult.textContent = `${answerStatus}... You got it!`;
  } else {
    confirmResult.setAttribute("id", "incorrect");
    confirmResult.textContent = `${answerStatus}... Oops!`;
  }
  // append div to #question-section
  document.getElementById("question-container").append(confirmResult);
};

//42. function to remove question section
const removeBanner = () => {
  startSection.remove();
};

const onLoad = () => {
  // check if highscores exists in LS
  const highScores = readFromLocalStorage();
  // if false then set highscores to empty array in LS
  if (!highScores) {
    localStorage.setItem("highscores", JSON.stringify([]));
  }
};

// getScores from local storage
const readFromLocalStorage = () => {
  // get from LS by key and parse
  const parsedData = JSON.parse(localStorage.getItem("highscores"));
  return parsedData;
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
      answerStatus = "Incorrect";
      timer -= 10;
    } else {
      answerStatus = "Correct";
    }
    renderAlert(answerStatus);

    setTimeout(() => {
      removeQuestion();

      if (questionIndex < questions.length - 1) {
        // if question is not last question then increment question index and render next question
        questionIndex += 1;

        renderQuestion();
      } else {
        // if question is last question set quizComplete to true and then render form
        clearInterval(timerId);

        renderForm();
      }
    }, 1000);
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

const renderGameOver = () => {
  document.getElementById("section-timer").remove();

  const gameOverSection = document.createElement("section");
  gameOverSection.setAttribute("class", "section-container");
  gameOverSection.setAttribute("id", "game-over-banner");

  const gameOverTitle = document.createElement("h1");
  gameOverTitle.setAttribute("class", "title");
  gameOverTitle.setAttribute("id", "game-over-title");
  gameOverTitle.textContent = "Game Over";

  const gameOverPara = document.createElement("h1");
  gameOverPara.setAttribute("class", "quiz-descrip");
  gameOverPara.setAttribute("id", "game-over-para");
  gameOverPara.textContent = "Oops! You ran out of time! Want to try again?";

  const startAgain = document.createElement("button");
  startAgain.setAttribute("class", "start-button");
  startAgain.setAttribute("id", "start-again");
  startAgain.textContent = "Play Again";

  startAgain.addEventListener("click", function () {
    document.location.href = "/index.html";
  });

  gameOverSection.append(gameOverTitle);
  gameOverSection.append(gameOverPara);
  gameOverSection.append(startAgain);
  mainElement.append(gameOverSection);
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
      removeQuestion();
      renderGameOver();
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
  input.setAttribute("class", "form-box");
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
  const nameInput = document.getElementById("full-name-input").value;

  if (nameInput !== "") {
    const player = {
      userName: nameInput,
      score: timer,
    };

    const highScores = readFromLocalStorage();

    highScores.push(player);

    // sort scores high to low
    highScores.sort((a, b) => b.score - a.score);

    writeToLocalStorage("highscores", highScores);

    renderHighScores();
  }
};

const writeToLocalStorage = (key, value) => {
  // stringify object value
  const stringifiedValue = JSON.stringify(value);
  //   set value for each key within LS
  localStorage.setItem(key, stringifiedValue);
};

const renderHighScores = () => {
  window.location = "highscores.html";
};

//2. event listener for the start button
// this is called a higher order function
startButton.addEventListener("click", startQuiz);

// document on load event listener
window.addEventListener("load", onLoad);
