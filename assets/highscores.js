const mainElement = document.getElementById("main");

const highScoresSection = document.getElementById("no-highscores");

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
    const tableSection = document.createElement("section");
    tableSection.setAttribute("class", "section-container");
    tableSection.setAttribute("id", "highscores-section");

    const titleTwo = document.createElement("h1");
    titleTwo.setAttribute("class", "highscore-title");
    titleTwo.textContent = "Highscores";

    const tableHeader = document.createElement("table");
    tableHeader.setAttribute("id", "all-scores");

    highScores.forEach((highScore) => {
      const tableRow = document.createElement("tr");

      const tableScore = document.createElement("td");
      tableScore.textContent = highScore.score;

      const tableName = document.createElement("td");
      tableName.textContent = highScore.userName;

      tableHeader.append(tableRow);

      tableRow.append(tableName, tableScore);
    });
    tableSection.append(titleTwo);
    tableSection.append(tableHeader);

    mainElement.append(tableSection);
  }
};
window.addEventListener("load", displayScores);

// const div = document.createElement("div");
// div.setAttribute("class", "highscores-section");

// const tableHeader = document.getElementById("all-scores");

// highScores.forEach((highScore) => {
//   const tableRow = document.createElement("tr");

//   const tableName = document.createElement("td");
//   tableName.textContent = "hiiii"

//   highScore.userName;

//   const tableScore = document.createElement("td");
//   tableScore.textContent = highScore.score;

//   tableSection.append(div, tableHeader);

//   tableHeader.append(tableRow);

//   tableRow.append(tableName, tableScore);

//   tableRow.append(tableName);
//   tableHeader.append(tableRow);
//   div.append(tableHeader);
//   tableSection.append(div);
//   mainElement.append(tableSection);

// document.getElementById("clear-scores").addEventListener("click", () => {
//   localStorage.clear();
//   displayScores();
// });
