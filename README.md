# coding-quiz

This challenge was to create an interactive, timed quiz using HTML, CSS and JavaScript.

Click here to see the deployed page: https://sophia4422.github.io/coding-quiz/

# User Journey

1. The page loads to show the nav bar, the quiz title, a description and a start button
2. When the Start Button is clicked
3. The Timer starts to count down from 40 seconds
4. Simultaneously, the first question appears with 4 answer choices

5. Click an answer choice
6. If the selected answer is correct: the next question displays
7. If the selected answer is wrong: 10 seconds from the timer is deducted, simultaneously the next question loads

Meanwhile:

- Timer is going down
- Your score is being tracked
- The current question you are on is being tracked

Game Over:

- When all questions are answered
- When remaining time reaches 0
- Then the form is rendered

Form:

- Please enter full name:
- Your Score is \*\*\*
- Click Submit
- Score is stored in local storage

# Quiz Theme

When the homework was first presented, I wanted to make the quiz about music. I had an idea of doing a black/green Spotify inspired design. The questions would involve, finish the lyric, guess the album cover, name that song etc. However, for the purposes of time constraints I thought it would be in my best interest to neglect the css and focus more on the functionality of Javascript, as this is my weak point.

I did not want my quiz to focus solely on code related questions, since this was not mandatory to the brief and also has been done multiple times. I decided instead to do a random, general knowledge quiz, with coding included. I started with four basic questions:

**Question 1: What is the capital of Brazil?**
<br> Answers: Brasilia, Rio de Janeiro, São Paulo, Ouro Preto

<details closed>
<summary>Answer to Question 1</summary>
<br>
Brasilia
</details>

**Question 2: What does HTML stand for?**
<br> Answers: HyperText Market Linkup, HyperText Markup Language, Homepage Text Modem Language, How The Market Looks

<details closed>
<summary>Answer to Question 2</summary>
<br>
HyperText Markup Language
</details>

**Question 3: What colours make up the Jamaican flag?**
<br> Answers: Yellow, Black & Green / Red, Yellow & Green / Black, Red & Yellow / Black, Red & Green

<details closed>
<summary>Answer to Question 3</summary>
<br>
Yellow, Black & Green
</details>

**Question 4: What is Bruno Mars' real name?**
<br> Answers: Bruno L. Marshall, Bruno Jupiter, Michael Perez, Peter Gene Hernandez

<details closed>
<summary>Answer to Question 4</summary>
<br>
Peter Gene Hernandez
</details>

# Quiz Features

- Navigation Bar
  The nav bar will remain at the top of the page consistently
  <br> The nav bar will feature two buttons:
- Home - this will always return the user to the homepage.
- High Scores - all scores inputted with a form will be loaded from local storage with the username and displayed highest to lowest.

- A timer: 40 seconds total, 10 seconds per question
- 4 multiple choice questions
- Form to add your name and save your highscore once the quiz has finished

The High Scores page will also feature a Go Back button that takes you to home page. There will also be a Clear button that clears high scores in local storage. When you load page with no high scores, a render message says 'No Scores' will appear.

The quiz should be responsive to all view ports.

# Meeting the Brief

Unfortunately, the appearance of the quiz is not how I would have liked it to look. I did not put much time into the css in order to make time for the JavaScript.

I had to restart the JS portion of this project 3 times, as I kept getting an error at the point where I would add my questions array. The console would tell me which part was not working but I was unsure how to fix it.

The page loads to show a nav bar with a home button and a high scores button. A title, description and start button show. The page is mobile responsive.

When the Start Quiz button is clicked, the first question loads and the timer begins. The timer starts at 40 seconds (10 seconds per question) and counts down. When incorrect answers are selected, my timer decreases by 10 seconds. If the correct answer is selected, the timer stays the same.

When the timer reaches 0, the form should render. If you see in the console, my renderForm function does show 'render form' as text in the console. I tried to target my question-section and use the .remove() in attempt to make the question section disappear. I also tried to append my form-section to the main element. However, I kept getting errors in my console when I did this, which would cause the whole application to stop working.

> Uncaught TypeError: Cannot read properties of null (reading 'remove')

    at updateTimerValue (index.js:184:50)
