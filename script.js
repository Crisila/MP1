//array of words

const words = [
    "Platypus",
    "Elephant",
    "Flying Squirrel",
    "Humpback Whale",
    "Armadillo",
    "Fennec Fox", 
    "Ethiopia",
    "Guatemala",
    "Madagascar",
    "Solomon Island",
    "Slovakia",
    "Zimbabwe", 
    "Head",
    "Hands",
    "Arms",
    "Elbow",
    "Knees",
    "Back",
    "Chair",
    "Table",
    "Desk",
    "Bed",
    "Coffee Table",
    "Cabinet"];


//choose word randomly
let randWord = Math.floor(Math.random() * words.length);
let chosenWord = words[randWord];
let correctAns = [];
let incorrectAns = [];
let lines = [];




// DOM
let playerAns = document.getElementsByClassName("player-ans")
let playerResult = document.getElementById("player-result")
let wrongLetters = document.getElementsByClassName('wrong-letters')


// Debug
console.log(chosenWord);

//issue: spaces are being counted
//issue: double letters
//issue: capital letters 
//need code to show hangman each wrong letter chosen



// display number of lines per letter of the word
let genLines = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        lines.push('_'); 
    }
    return lines
}
// // debug
// console.log(genLines());


//get user's guess
document.addEventListener('keypress', (event) => {
    let key = event.key


//display correct letters
    if (chosenWord.indexOf(key) > -1) {
        correctAns.push(key);
        // replace lines to letters
        lines[chosenWord.indexOf(key)] = key;

        playerAns[0].innerHTML = lines.join(' ');
        playerResult.innerHTML = correctAns;

        // check if word matches 
        // console.log(lines)
        if (lines.join('') == chosenWord) {
            alert('Winner!')
        }
    }
    // display incorrect letters used
    else {
        incorrectAns.push(key);
        wrongLetters[0].innerHTML = incorrectAns;
    }
});

//to replace each letter with a lines --> genLines

playerAns[0].innerHTML = genLines().join('');


