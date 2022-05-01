// I click 'Start Quiz'
const startButton = document.getElementById("start-btn");

//target the general knowledge / start section to remove it
const startSection = document.getElementById("start-quiz-banner");

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

startButton.addEventListener("click", startQuiz);
