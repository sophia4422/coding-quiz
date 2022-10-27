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
    playBtn.textContent = "Home";

    hsSection.append(hsTitle);
    hsSection.append(message);
    hsSection.append(playBtn);
    mainElement.append(hsSection);

    document.getElementById("start-btn").addEventListener("click", function () {
      document.location.href = "/index.html";
    });
  } else {
    const tableSection = document.createElement("section");
    tableSection.setAttribute("class", "section-container");
    tableSection.setAttribute("id", "highscores-section");

    const titleTwo = document.createElement("h1");
    titleTwo.setAttribute("class", "highscore-title");
    titleTwo.textContent = "Highscores";

    const tableHeader = document.createElement("table");
    tableHeader.setAttribute("id", "all-scores");

    const playAgain = document.createElement("button");
    playAgain.setAttribute("class", "start-button");
    playAgain.setAttribute("id", "restart");
    playAgain.textContent = "Replay";

    const clearBtn = document.createElement("button");
    clearBtn.setAttribute("class", "start-button");
    clearBtn.setAttribute("id", "clear-scores");
    clearBtn.textContent = "Clear Highscores";

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
    tableSection.append(playAgain);
    tableSection.append(clearBtn);
    mainElement.append(tableSection);

    document.getElementById("clear-scores").addEventListener("click", () => {
      localStorage.clear();
      tableSection.remove();
      displayScores();
    });

    document.getElementById("restart").addEventListener("click", function () {
      document.location.href = "./index.html";
    });
  }
};

window.addEventListener("load", displayScores);
