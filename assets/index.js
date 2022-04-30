// Page loads 'General Knowledge quiz'

// I click 'Start Quiz'
const startButton = document.getElementById("start-btn");

const startQuiz = () => {
  // The 'General Knowledge' Page disappears
  // The first question, the timer and the answers appear
  // The timer starts to count down
  console.log("HEY");
};

startButton.addEventListener("click", startQuiz);

// I click an answer
// If the answer is correct, the next question loads
// If the answer is wrong, the next question loads and -10 seconds is deducted from the timer

// Once I have finished all the questions
// Or the timer runs out
// Then the form page loads
// I enter my name and my score is displayed

//If I click home, the 'General Knowledge Quiz' page loads
// If I click 'High Scores' my names / scores are pulled from LS and displayed (???)
