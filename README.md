# coding-quiz

This challenge was to create an interactive, timed quiz using HTML, CSS and JavaScript.

Click here to see the deployed page:

# Quiz Features

- Navigation Bar
  The nav bar will remain at the top of the page consistently
  <br> The nav bar will feature two buttons:
- Home - this will always return the user to the homepage.
- High Scores - all scores inputted with a form will be loaded from local storage with the username and displayed highest to lowest.

The High Scores page will also feature a Go Back buton that takes you to home page, and a Clear button that clears high scores in local storage.
~When you load page with no high scores, a render message says 'No Scores' will appear

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

###

######

At number 39. things started to go wrong. I just wanted to target the Li so I did
if (target.tagName === "LI")
console.log("Clicked Li);
but the console would not read it. Nothing happened when clicked. So I targeted each Li,
LI1, LI2 etc and that way it worked.
I tried to do
if (target.tagName === "LI1" && target.tagName === "LI2") etc to get the same effect for each Li,
but that did not work.
So I have had to target each li1, li2 etc in the if statement. The clicks are read, but I don't know where to go from here.
#########

when the wrong answer is clicked, I want to decrement my timer by -= 10 seconds.

const questions = [
{
question: "What is the capital of Brazil?",
answers: [
{ text: 'Brasilia', correct: true },
{ text: 'Rio de Janeiro', correct: false},
{ text: 'Sao Paulo', correct: false},
{ text: 'Ouro Preto', correct: false},
]
},
{
question: "What does HTML stand for?",
answers: [
{ text: 'HyperText Markup Language', correct: true },
{ text: 'HyperText Market Linkup', correct: false},
{ text: 'Homepage Text Modem Language', correct: false},
{ text: 'How The Market Looks', correct: false},
]
},
{
question: "What colours make up the Jamaican flag?",
answers: [
{ text: 'Yellow, Black & Green', correct: true },
{ text: 'Red, Yellow & Green', correct: false},
{ text: 'Black, Red & Yellow', correct: false},
{ text: 'Black, Red & Green', correct: false},
]
},
{
question: "What is Bruno Mars' real name?",
answers: [
{ text: 'Peter Gene Hernandez', correct: true },
{ text: 'Michael Perez', correct: false}
{ text: 'Bruno Jupiter', correct: false}
{ text: 'Bruno L. Marshall', correct: false}
]
},
];
