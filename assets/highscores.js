const mainElement = document.getElementById("main");

// const highScoresSection = document.getElementById("no-highscores");

const readFromLocalStorage = () => {
  // get from LS by key and parse
  const parsedData = JSON.parse(localStorage.getItem("highscores"));
  return parsedData;
};

// If no scores, return message
const displayScores = () => {
  const highScores = readFromLocalStorage();
  if (!highScores || highScores.length === 0) {
    // highScoresSection.remove();

    const hsSection = document.createElement("section");
    hsSection.setAttribute("class", "section-container");
    hsSection.setAttribute("id", "no-highscores");

    const hsTitle = document.createElement("h1");
    hsTitle.setAttribute("class", "highscore-title");
    hsTitle.textContent = "There are no scores to display";

    const message = document.createElement("p");
    message.setAttribute("class", "quiz-descrip");
    message.textContent = "Play the quiz to get a highscore!";

    const playBtn = document.createElement("button");
    playBtn.setAttribute("class", "start-button");
    playBtn.setAttribute("id", "start-btn");
    playBtn.textContent = "Start Quiz!";

    hsSection.append(hsTitle);
    hsSection.append(message);
    hsSection.append(playBtn);
    mainElement.append(hsSection);
  } else {
    const tableHeader = document.getElementById("all-scores");

    highScores.forEach((highScore) => {
      const tableRow = document.createElement("tr");

      const tableName = document.createElement("td");
      tableName.textContent = highScore.userName;

      const tableScore = document.createElement("td");
      tableScore.textContent = highScore.score;

      tableHeader.append(tableRow);

      tableRow.append(tableName, tableScore);
    });
  }
};

// document.getElementById("clear-scores").addEventListener("click", () => {
//   localStorage.clear();
//   displayScores();
// });

window.addEventListener("load", displayScores);
