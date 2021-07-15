'use strict';

// Initializes the game, removes the dice from the screen and sets scores to zero
document.querySelector("#score--0").textContent = 0;
document.querySelector("#score--1").textContent = 0;
document.querySelector(".dice").classList.add("hidden");

// variables we need
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

let player1Total = document.querySelector("#score--0");
let player2Total = document.querySelector("#score--1");

let player1CurrentScore = document.querySelector("#current--0");
let player2CurrentScore = document.querySelector("#current--1");

let currentScore = 0;
let tempScore = 0;

document.querySelector(".btn--roll").addEventListener("click", function(){
    const number = Math.trunc(Math.random() * 6) + 1;

    if (number === 1 && player1.classList.contains("player--active")){
        currentScore = 0;
        player1CurrentScore.textContent=currentScore;
        displayDice(number);
        player1.classList.remove("player--active");
        player2.classList.add("player--active");
    } else if (player1.classList.contains("player--active")){
        currentScore += number;
        player1CurrentScore.textContent=currentScore;
        displayDice(number);
    } else if (number === 1 && player2.classList.contains("player--active")){
        currentScore = 0;
        player2CurrentScore.textContent=currentScore;
        displayDice(number);
        player1.classList.add("player--active");
        player2.classList.remove("player--active");
    } else {
        currentScore += number;
        player2CurrentScore.textContent=currentScore;
        displayDice(number);
    }
});

document.querySelector(".btn--hold").addEventListener("click", function(){
    if (Number(player1Total.textContent) + Number(player1CurrentScore.textContent) >= 100){
        
        tempScore = Number(document.querySelector("#score--0").textContent);
        tempScore += currentScore;
        document.querySelector("#score--0").textContent=tempScore;
        document.querySelector("#current--0").textContent=0;
        currentScore =0;
        
        console.log("Player 1 wins!");
    } else if (Number(player2Total.textContent) + Number(player2CurrentScore.textContent) >= 100) {
        
        tempScore = Number(document.querySelector("#score--1").textContent);
        tempScore += currentScore;
        document.querySelector("#score--1").textContent=tempScore;
        document.querySelector("#current--1").textContent=0;
        currentScore = 0;
        
        console.log("Player 2 wins!");
    } else if (player1.classList.contains("player--active")){
        document.querySelector(".player--0").classList.remove("player--active");
        document.querySelector(".player--1").classList.add("player--active");
        tempScore = Number(document.querySelector("#score--0").textContent);
        tempScore += currentScore;
        document.querySelector("#score--0").textContent=tempScore;
        document.querySelector("#current--0").textContent=0;
        currentScore =0;
    } else {
        document.querySelector(".player--0").classList.add("player--active");
        document.querySelector(".player--1").classList.remove("player--active");
        tempScore = Number(document.querySelector("#score--1").textContent);
        tempScore += currentScore;
        document.querySelector("#score--1").textContent=tempScore;
        document.querySelector("#current--1").textContent=0;
        currentScore = 0;
    }
});

document.querySelector(".btn--new").addEventListener("click", newGame);

function displayDice(number){
    document.querySelector(".dice").src = `dice-${number}.png`;
    document.querySelector(".dice").classList.remove("hidden");
};

function newGame(){
    document.querySelector(".dice").classList.add("hidden");
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
    player1CurrentScore.textContent=0;
    player2CurrentScore.textContent=0;
    player1Total.textContent=0;
    player2Total.textContent=0;
    currentScore = 0;
};