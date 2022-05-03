//________________________

//1. target the start button
const startButton = document.getElementById("start-btn");

//7.4 target timer span
const timerSpan = document.getElementById("timer-span");

//4. target the general knowledge / start section to remove it
const startSection = document.getElementById("start-quiz-banner");

//8. target main element
const mainElement = document.getElementById("main");

//40. target form section
const formSection = document.getElementById("form-section");

//42. target the question section to remove it
const questionSection = document.getElementById("question-section");

//7.3 timer
let timer = 40;

//26. current question index
let questionIndex = 0;

//27. all answers array
const options = ["Brasilia", "Rio de Janeiro", "São Paulo", "Ouro Preto"];

//28. all questions array
const questions = [
  {
    text: "What is the capital of Brazil?",
    options,
  },
  {
    text: "What does HTML stand for?",
    options,
  },
  {
    text: "What colours make up the Jamaican flag?",
    options,
  },
  {
    text: "What is Bruno Mars' real name?",
    options,
  },
];

//36. handleOptionClick function to handle click events in question section
const handleOptionClick = (event) => {
  console.log("clicked inside question section");

  //37. get current target
  const currentTarget = event.currentTarget;
  //38. get target
  const target = event.target;

  //39. check that click only comes from the li
  if (target.tagName === "LI1") {
    const question = questions[questionIndex].text;
    console.log(question);
  } else if (target.tagName === "LI2") {
    const question = questions[questionIndex].text;
    timer -= 10;
  } else if (target.tagName === "LI3") {
    const question = questions[questionIndex].text;
    timer -= 10;
  } else if (target.tagName === "LI4") {
    const question = questions[questionIndex].text;
    timer -= 10;
  }
};

//5. function to remove banner
const removeQuestion = () => {
  console.log("remove question section");

  questionSection.remove();
};

//6. function to render question to page
const renderQuestion = () => {
  console.log("render question");

  //29. get current question
  const currentQuestion = questions[questionIndex];

  //9. create section
  const section = document.createElement("section");
  //12. set class attribute for section
  section.setAttribute("class", "question-container");
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
  const li1 = document.createElement("li1");
  //18. set class attribute for li1
  li1.setAttribute("class", "answers-item");
  //19/30. set h2 text content
  li1.textContent = currentQuestion.options[0];

  //20. li2:
  const li2 = document.createElement("li2");
  li2.setAttribute("class", "answers-item");
  //31. answers taken from array
  li2.textContent = currentQuestion.options[1];

  //21. li3:
  const li3 = document.createElement("li3");
  li3.setAttribute("class", "answers-item");
  //32.
  li3.textContent = currentQuestion.options[2];

  //22. li4:
  const li4 = document.createElement("li4");
  li4.setAttribute("class", "answers-item");
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

//42. function to remove question section
const removeBanner = () => {
  console.log("remove banner");

  startSection.remove();
};

//7. function to start timer
//this is a callback function
const startTimer = () => {
  console.log("timer started");

  //7.2 function for updateTimerValue
  const updateTimerValue = () => {
    console.log("update timer value");

    //decrement timer by 1
    timer -= 1;

    timerSpan.textContent = timer;

    //check if timer is equal to 0
    if (timer === 0) {
      clearInterval(timerId);
      console.log("game over");
      //41. render form
      renderForm();
    }

    //set text to new timer value
    timerSpan.textContent = timer;
  };

  //7.1 repeat code for fixed interval
  const timerId = setInterval(updateTimerValue, 1000);
  console.log(timerId);
};

//3. declare the event handler function for the start button click
const startQuiz = () => {
  console.log("button clicked");

  //5. remove question banner
  removeBanner();
  //6. render first question
  renderQuestion();
  //7.start timer
  startTimer();
};

//41. function to render form
const renderForm = () => {
  console.log("render form");

  removeQuestion();
};

//2. event listener for the start button
// this is called a higher order function
startButton.addEventListener("click", startQuiz);
