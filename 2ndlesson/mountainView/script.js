"use strict";

function checkValidNumber () {
    let number;
    number = parseInt(prompt("Please enter a mount quantity"))
    while (isNaN(number) || number === 0) {
        alert("Please enter a valid number");
        number = parseInt(prompt("Please enter a valid number of the mount quantity"));
    }
    return number;
}

// const mountAmount = Number(prompt("Please enter a mount quantity"));

const mountAmount = checkValidNumber ();