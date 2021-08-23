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
let hash = '';
const arrOfHashes = [];
const mountArr = [];

//************* USING CYCLES ***********

// let defltMount = 3;
// let addinMount = 0;
// let sumAddMount = defltMount + addinMount;
let cycleHash = '';

function createLoopMountain (mountAmount) {

    for (let i = 0; i < mountAmount; i++) {
        console.log(cycleHash + '\u25E3');
        cycleHash = cycleHash.concat('#');
    }

    console.log(cycleHash + '\u29D0');

    cycleHash = cycleHash.substring(0, cycleHash.length-1);

    for (let i = mountAmount; i > 0; i--) {
        console.log(cycleHash + '\u25E4');
        cycleHash = cycleHash.substring(0, cycleHash.length-1);
    }

    // for (let j = 0; j < Math.floor(sumAddMount/2); j++) {
    //     console.log(cycleHash + '\u25E3');
    // }
    //     cycleHash = cycleHash.concat('#');

    // for (let k = 0; k < 1; k++) {
    //     console.log(cycleHash + '\u29D0');
    // }
    //
    // for (let k = 1; k >=0; k--) {
    //     console.log(cycleHash + '\u25E4');
    // }
    //addinMount += 2;
}

for (let i = 1; i <= mountAmount; i++) {
    createLoopMountain(i);
}

console.log('');
console.log('');
console.log('');

//*****USING ARRAYS************

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