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
    "cabinet"
];

// Choose a random word and convert it to lowercase
let guessedWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
let correctAns = [];
let incorrectAns = [];
let lives = 9;

// Generate lines for the display, including spaces
let lines = Array.from(guessedWord).map(letter => (letter === ' ') ? ' ' : '_');

document.getElementsByClassName("player-ans")[0].innerHTML = lines.join(' ');
document.getElementById("player-lives").innerHTML = lives;

document.getElementById("play-again").addEventListener("click", function () {
    document.querySelector('.alert-pop-up').style.display = 'none'; // Hide the alert
    location.reload(); // Reload the page to reset the game
});



document.addEventListener('keypress', (event) => {
    const userGuess = event.key.toLowerCase();
    // Ensure the guess is a letter and not already guessed
    if (!correctAns.includes(userGuess) && !incorrectAns.includes(userGuess) && userGuess >= 'a' && userGuess <= 'z') {
        displayLetters(userGuess);
        showLives();
        IsGuessedWordComplete();
        stickmanParts();
    }
    // Log the correct answer
    console.log('Correct Answer:', guessedWord);
});

function displayLetters(userGuess) {
    if (guessedWord.includes(userGuess)) {
        correctAns.push(userGuess);
        for (let i = 0; i < guessedWord.length; i++) {
            if (guessedWord[i] === userGuess) {
                // Update correct letters
                lines[i] = userGuess;
            }
        }
        document.getElementsByClassName("player-ans")[0].innerHTML = lines.join(' '); // Display updated letters and spaces
    } else {
        incorrectAns.push(userGuess);
        document.getElementsByClassName('wrong-letters')[0].innerHTML = incorrectAns.join(', ');
        lives--;
        document.getElementById("player-lives").innerHTML = lives;
    }
}

function IsGuessedWordComplete() {
    // Check if the guessed word matches the correct answer excluding spaces
    // Remove spaces for comparison
    const currentGuess = lines.join('').replace(/ /g, '');

    if (currentGuess === guessedWord) {
        alert('Congratulations! You saved the stickman!');
        redirectToHome();
    }
}

function stickmanParts() {
    const stickmanParts = document.getElementsByClassName('figure');
    for (let i = 0; i < stickmanParts.length; i++) {
        stickmanParts[i].style.display = i < incorrectAns.length ? 'block' : 'none';
    }
    if (incorrectAns.length === stickmanParts.length) {
        alert('You lost!');
        redirectToHome();
    }
}

function redirectToHome() {
    window.location.href = 'index.html';
}

// Show lives and check game over condition
function showLives() {
    if (lives <= 0) {
        alert('Game Over');
        redirectToHome();
    }
}

