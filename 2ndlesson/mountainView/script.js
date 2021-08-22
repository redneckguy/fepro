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

const mountAmount = checkValidNumber ();

// const mountAmount = 4;
let hash = '';
const arrOfHashes = [];
const mountArr = [];


//create a mount
function createMountain(mountAmount) {

    //create hashes array for a mount
    for (let i = 0; i <= mountAmount; i++) {
        arrOfHashes.push(hash);
        hash = hash.concat('#');
    }

    for (let j = 0; j <= mountAmount - 1; j++) {
        mountArr.push(arrOfHashes[j] + '\u25E3');
    }

    mountArr.push(arrOfHashes[mountAmount] + '\u29D0');

    for (let y = mountAmount - 1; y >= 0; y--) {
        mountArr.push(arrOfHashes[y] + '\u25E4')
    }
}

for (let i = 0; i < mountAmount; i++) {
    createMountain(i + 1);
}

mountArr.forEach(i => console.log(i));