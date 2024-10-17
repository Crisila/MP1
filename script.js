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


// //choose word randomly
// let randWord = Math.floor(Math.random() * words.length);
// let guessedWord = words[randWord];

// let correctAns = [];
// let incorrectAns = []; ///stored incorrect guesses
// let lines = [];
// let lives = 9;
// let stickmanIndex = 0;





// // DOM
// let playerAns = document.getElementsByClassName("player-ans");
// let playerLives = document.getElementById("player-lives");
//     playerLives.innerHTML = lives
// let wrongLetters = document.getElementsByClassName('wrong-letters');
// let stickman = document.getElementsByClassName('stickman');
// let figure = document.getElementsByClassName('figure')

// let remainingLetters = guessedWord.length;

// // Debug
// console.log(guessedWord);

// //issue: spaces are being counted
// //issue: double letters
// //issue: capital letters 
// //need code to show hangman each wrong letter chosen





// // Hide Stickman 
// // function rodBase() {
// //     let rodBase = document.querySelector("rod-base")
// //     stickman.push(rodBase);
// //     rodBase.setAttribute("visibility", "hidden")
// // }

// // let rod = document.querySelector("rod")
// // stickman.push(rod)
// // let hanger = document.querySelector("hanger")
// // stickman.push(hanger)
// // let head = document.querySelector("head")
// // stickman.push(head)
// // let body = document.querySelector("body")
// // stickman.push(body)
// // let rightArm = document.querySelector("right-arm")
// // stickman.push(rightArm)
// // let leftArm = document.querySelector("left-arm")
// // stickman.push(leftArm)
// // let rightLeg = document.querySelector("right-leg")
// // stickman.push(rightLeg)
// // let leftLeg = document.querySelector("left-leg")
// // stickman.push(leftLeg)


// // rod.setAttribute("visibility", "hidden")
// // hanger.setAttribute("visibility", "hidden")
// // head.setAttribute("visibility", "hidden")
// // body.setAttribute("visibility", "hidden")
// // rightArm.setAttribute("visibility", "hidden")
// // leftArm.setAttribute("visibility", "hidden")
// // rightLeg.setAttribute("visibility", "hidden")
// // leftLeg.setAttribute("visibility", "hidden")


// // // debug
//     // console.log(genLines());




// // display number of lines per letter of the word
// let genLines = () => {
//     for (let i = 0; i < guessedWord.length; i++) {
//         lines.push('_'); 
//     }
//     return lines
// }

//  //get user's guess
//     document.addEventListener('keypress', (event) => {
//         let userGuess = event.userGuess;
//     });


// function displayletters() {
//     //display correct letters

//     if (guessedWord.indexOf(userGuess) > -1) {
//         correctAns.push(userGuess);
//         // replace lines to letters
//         lines[guessedWord.indexOf(userGuess)] = userGuess;
    
//         playerAns[0].innerHTML = lines.join(' ');
//         playerLives.innerHTML = lives;

//         const replaceguess = guessedWord.innerText.replace(/\n/g, ' ');

//         if (replaceguess === guessedWord){
//             alert('You win!')
//         }
//     }   
    
    
// }

// //to replace each letter with a lines --> genLines
// playerAns[0].innerHTML = genLines().join('');



// // to check if user win or lost
// function IsGuessedWordComplete() {
//         // check if word matches 
//     // console.log(lines)
//     if (correctAns === guessedWord) {
//         alert('Congratulations! You saved the stickman!')
//     }
// // display incorrect letters used
//     else {
//         incorrectAns.push(userGuess);
//         wrongLetters[0].innerHTML = incorrectAns;
//         //Make one part visibile in order 
//         stickman[figure].setAttribute("hidden", true)
//         ++figure

        

//     }
// }

// function stickmanparts() {
//     figure.forEach((part,index) => {
//         let errors = incorrectAns.length;

//         if (index < errors) {
//             part.style.display = 'block'            
//         } else {
//             part.style.display = 'none'
            
//         }
        
//     });
//     if(incorrectAns.length === figure.length) {
//         alert('You lost!')
//     }
// }




// //show lives

// function showLives() {
//     if (lives < 1) {
//         playerLives.innerHTML = "Game Over";

//     }
//     for (let l = 0; l < incorrectAns.length; l++) {
//         if (lines === incorrectAns.length) {
//             playerLives.innerHTML = "You Win!";
//         }        
//     }
// }






// // if(IsGuessedWordComplete == true) {
// //     //show the user a message that he won
// //     alert("You win!")

// // }
// // if(GameOver) {}

// // //






// // //Check for complete gussed word
// // function IsGuessedWordComplete()
// // {
// //     if ( lines === guessedWord)//checkl the number _ lines array is zero --> user wins 
// //         return true;

    
// //         return false;

// // }


// // function GameOver()
// // {
// //     if (correctAns.length + incorrectAns.length > lives) {
// //     alert ('You lose.')
// //     return true;
// //     //You lose
// //     }
// //     else {
// //     return false;
// //     }
// // }



// //     //if(correctAns.indexOf(userGuess) > -1) //give user a message that he already press that userGuess


// // function alreadyPressed () {

// //         if(correctAns.indexOf(userGuess) > -1) {

// //         return alert('This letter is no longer available')
// //     }
// //         else if(incorrectAns.indexOf(userGuess) > -1) {

// //             return alert('This letter is no longer available')
// //             //else if(incorrectAns.indexOf(userGuess) > -1) //give user a message that he already press that userGuess
            
// //     } 
// //         else {
// //             guessedWord[i] == userGuess;

// //             //else { for (choosenword ) {}
// //             //loop throught the choosen word to check if the letter exist  choosenword[i] == userGuess 
// //     }
// // }

     
     


    




// //code not using below
// // ----------------------------------------------------------------------------------------------






// // while (remainingLetters > 0) {
// //     //Game code goes here

// //     //Show the player their progress

// //     //Take input from the player
// //     if (lines === null) {
// //         break;
// //     } else if (genLines.length !== 1){
        
// //     } else {
// //         //update game state
// //         for (let e = 0; e < guessedWord.length; e++) {
// //             if (guessedWord[e] === userGuess) {
// //                 genLines[e] = userGuess;
// //                 remainingLetters--;
// //             }
            
// //         }
// //     }

// //     //Update guessedWord and remainingLetters for every correct guess
    
// // }

// // console.log(userGuess);


// // --------------------------------------------------------------------------------------------




// // // display number of lines per letter of the word
// // let genLines = () => {
// //     for (let i = 0; i < guessedWord.length; i++) {
// //         lines.push('_'); 
// //     }
// //     return lines
// // }




let guessedWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
let correctAns = [];
let incorrectAns = [];
let lives = 9;
let lines = Array(guessedWord.length).fill('_');

document.getElementsByClassName("player-ans")[0].innerHTML = lines.join(' '); // Display underscores
document.getElementById("player-lives").innerHTML = lives;

document.addEventListener('keypress', (event) => {
    const userGuess = event.key.toLowerCase();
    if (!correctAns.includes(userGuess) && !incorrectAns.includes(userGuess)) {
        displayLetters(userGuess);
        showLives();
        IsGuessedWordComplete();
        stickmanParts();
    }
    console.log('Correct Answer:', guessedWord); // Log correct answers
});

function displayLetters(userGuess) {
    if (guessedWord.includes(userGuess)) {
        correctAns.push(userGuess);
        for (let i = 0; i < guessedWord.length; i++) {
            if (guessedWord[i] === userGuess) {
                lines[i] = userGuess; // Update correct letters
            }
        }
        document.getElementsByClassName("player-ans")[0].innerHTML = lines.join(' ');
    } else {
        incorrectAns.push(userGuess);
        document.getElementsByClassName('wrong-letters')[0].innerHTML = incorrectAns.join(', ');
        lives--;
        document.getElementById("player-lives").innerHTML = lives;
    }
}

function IsGuessedWordComplete() {
    if (lines.join('') === guessedWord) {
        alert('Congratulations! You saved the stickman!');
    }
}

function stickmanParts() {
    const stickmanParts = document.getElementsByClassName('figure');
    for (let i = 0; i < stickmanParts.length; i++) {
        stickmanParts[i].style.display = i < incorrectAns.length ? 'block' : 'none';
    }
    if (incorrectAns.length === stickmanParts.length) {
        alert('You lost!');
    }
}

function redirectToHome() {
    window.location.href = 'index.html'; // Replace 'index.html' with your desired URL
}

// Call redirectToHome when the user loses or wins
function showLives() {
    if (lives <= 0) {
        alert('Game Over');
        redirectToHome(); // Redirect the user when they lose
    }
}

// Alternatively, if the player wins
function IsGuessedWordComplete() {
    if (lines.join('') === guessedWord) {
        alert('Congratulations! You saved the stickman!');
        redirectToHome(); // Redirect the user when they win
    }
}


