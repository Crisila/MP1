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
    "head",
    "hands",
    "arms",
    "elbow",
    "knees",
    "back",
    "chair",
    "table",
    "desk",
    "bed",
    "coffee table",
    "cabinet"];


//choose word randomly
let randWord = Math.floor(Math.random() * words.length);
let guessedWord = words[randWord];
let correctAns = [];
let incorrectAns = [];
let lines = [];
let NumberOfAllowedTries = 9;




// DOM
let playerAns = document.getElementsByClassName("player-ans")
let playerResult = document.getElementById("player-result")
let wrongLetters = document.getElementsByClassName('wrong-letters')


// Debug
console.log(guessedWord);

//issue: spaces are being counted
//issue: double letters
//issue: capital letters 
//need code to show hangman each wrong letter chosen



// display number of lines per letter of the word
let genLines = () => {
    for (let i = 0; i < guessedWord.length; i++) {
        lines.push('_'); 
    }
    return lines
}

//Hide Stickman 
let stickman;
let rodBase = document.querySelector("rod-base")
stickman.push(rodBase)
let rod = document.querySelector("rod")
stickman.push(rod)
let hanger = document.querySelector("hanger")
stickman.push(hanger)
let head = document.querySelector("head")
stickman.push(head)
let body = document.querySelector("body")
stickman.push(body)
let rightArm = document.querySelector("right-arm")
stickman.push(rightArm)
let leftArm = document.querySelector("left-arm")
stickman.push(leftArm)
let rightLeg = document.querySelector("right-leg")
stickman.push(rightLeg)
let leftLeg = document.querySelector("left-leg")
stickman.push(leftLeg)

rodBase.setAttribute("visiability", "hidden")
rod.setAttribute("visiability", "hidden")
hanger.setAttribute("visiability", "hidden")
head.setAttribute("visiability", "hidden")
body.setAttribute("visiability", "hidden")
rightArm.setAttribute("visiability", "hidden")
leftArm.setAttribute("visiability", "hidden")
rightLeg.setAttribute("visiability", "hidden")
leftLeg.setAttribute("visiability", "hidden")
let stickmanIndex = 0;

// // debug
// console.log(genLines());

//Check for complete gussed word
function IsGuessedWordComplete()
{
    if ( lines === guessedWord)//checkl the number _ lines array is zero --> user wins 
        return true;

    
        return false;

}


function GameOver()
{
    if (correctAns.length + incorrectAns.length > NumberOfAllowedTries) 
    
    return true;
    //You lose
    return false;
}


//get user's guess
document.addEventListener('keypress', (event) => {
    let key = event.key

}

    //if(correctAns.indexOf(key) > -1) //give user a message that he already press that key


function alreadyPressed () {

        if(correctAns.indexOf(key) > -1);

        return alert('This letter is no longer available');

        
    } else if (incorrectAns.indexOf(key) > -1) {

        return alert('This letter is no longer available')
        //else if(incorrectAns.indexOf(key) > -1) //give user a message that he already press that key
        
    } else {
        guessedWord[i] == key

        //else { for (choosenword ) {}
        //loop throught the choosen word to check if the letter exist  choosenword[i] == key 
    }

     
     


    





//display correct letters
    if (guessedWord.indexOf(key) > -1) {
        correctAns.push(key);
        // replace lines to letters
        lines[guessedWord.indexOf(key)] = key;

        playerAns[0].innerHTML = lines.join(' ');
        playerResult.innerHTML = correctAns;

        // check if word matches 
        // console.log(lines)
        if (lines.join('') == guessedWord) {
            alert('Congratulations! You saved the stickman!')
        }
    }
    // display incorrect letters used
    else {
        incorrectAns.push(key);
        wrongLetters[0].innerHTML = incorrectAns;
        //Make one part visibile in order 
        stickman[stickmanIndex].setAttribute()
        ++stickmanIndex
        

    }
    //}}

    if(IsGuessedWordComplete == true) {
        //show the user a message that he won
        return alert('You win!')

    }
    if(GameOver) {}

    //


//to replace each letter with a lines --> genLines

playerAns[0].innerHTML = genLines().join('');


