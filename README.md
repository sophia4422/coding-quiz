# coding-quiz

Beat the timer to answer all the questions

NAV BAR:
Home - take you to the home - where it says start quiz
High Scores - All scores are loaded from LS with name
~Go back: takes you to home page | Clear: clears high scores in LS
~When you load page with no high scores, a render message says 'No Scores' appear

What do I want to do?

-Page loads
-Start Button
-Click Start Button:
~Timer starts to count down
~First question appears with 4 answer choices

-Click an answer choice
~If right: next question
~If wrong: time is deducted, go to next question

Meanwhile:
Timer is going down
Your score is being tracked
The current question you are on is being tracked

# Questions ~ random knowledge

Question 1: What is the capital of Brazil?
Answers: Brasilia, Rio de Janeiro, Sao Paulo, Ouro Preto

Question 2: What does HTML stand for?
Answers: HyperText Market Linkup, HyperText Markup Language, Homepage Text Modem Language, How The Market Looks

Question 3: What colours make up the Jamaican flag?
Answers: Yellow, Black & Green / Red, Yellow & Green / Black, Red & Yellow / Black, Red & Green

Question 4: What is Bruno Mars' real name?
Answers: Bruno L. Marshall, Bruno Jupiter, Michael Perez, Peter Gene Hernandez

###

GAME OVER:
-When all questions are answered
-When remaining time reaches 0
~Stop timer, render form

FORM:
-Please enter full name:
-Your Score is \*\*
Submit
/Store score in LS

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
