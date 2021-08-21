"use strict";

//Questions
//How to exit the game after any prompt if I have condition to check if the number is NaN and after
// some actions it converts to 0 (null)?
//if in prompt I press Cancel I'm getting null (or NaN depending of how I'm converting the prompt
// (using Number or parseInt)) as result and this won't stop the function
//when Number(prompt) = 0
//when parseInt(prompt) = NaN!!!!

function playGameAgain () {
    const game = confirm("Would you like to play again?");
    if (game) {
        location.reload();
    }
    else {
        alert("Game over!");
    }
}

function checkValidNumber () {
    let number;
    number = parseInt(prompt("Enter a number for the probable range"))
    while (isNaN(number) || number === 0) {
        alert("Please enter a valid number");
        number = parseInt(prompt("Enter a number for the probable range"));
    }
    return number;
}

function equalityCheck() {
    if (isNaN(playersNum) || playersNum === 0) {
        alert("Please enter any number except 0");
        playersNum = Number(prompt(`Guess the number, don't mess with me bro 🤔`));
        if (playersNum === 0) {
            alert("See you later alligator 🤷");
            return;
        }
        equalityCheck();
    } else if (playersNum > randNum) {
        alert(`This number is more than intended, this is your ${counter} attempt. Please try again! 😿`);
        counter++;
        playersNum = Number(prompt(`Please enter another number`));
        equalityCheck();
    } else if (playersNum < randNum) {
        alert(`This number is less than intended, this is your ${counter} attempt. Please try again! 😿`);
        counter++;
        playersNum = Number(prompt(`Please enter another number`));
        equalityCheck();
    } else if (playersNum === randNum) {
        alert(`Congratulations! This is the correct number! 🎉🎉🎉 It took ${counter} attempts`);
    }
}

//the range of a probable number
// let rangeOfNumbers = parseInt(prompt("Enter a number for the probable range"));
let rangeOfNumbers = checkValidNumber();

// generation of a probable number
const randNum = Math.floor(Math.random()*rangeOfNumbers + 1);

//the player's number
let playersNum = Number(prompt(`Guess the number from 1 to ${rangeOfNumbers}`));

let counter = 1;

equalityCheck();
playGameAgain ();



