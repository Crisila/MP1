// reference
const stickman = document.getElementsByClassName("stickman");
const wrongLetters = document.getElementsByClassName("wrong-letters");
const playerAns = document.getElementsByClassName("player-ans");
const result = document.getElementById("player-result");
const playAgain = document.getElementById("play-again");


// // letter options
// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// OPTION FOR RANDOM CATEGORIES
// // make randomized categories --> not working for me
// // https://www.kirupa.com/html5/picking_random_item_from_array.htm
// let categories = ['Country', 'Birds', 'Mammals', 'Body', 'Furnitures'];

// let random = categories[Math.floor(Math.random() * categories.length)]
// console.log(`The chosen category is ${random}`);


    // Country: [
    //     "Ethiopia",
    //     "Guatemala",
    //     "Madagascar",
    //     "Solomon Island",
    //     "Slovakia",
    //     "Zimbabwe"
    // ], 
    // Birds: [
    //     "Golden Eagle",
    //     "European Starling",
    //     "Red-Winged Blackbird",
    //     "Wood Duck",
    //     "Turkey Vulture",
    //     "Bee Hummingbird"
    // ], 
    // Mammals: [
    //     "Platypus",
    //     "Elephant",
    //     "Flying Squirrel",
    //     "Humpback Whale",
    //     "Armadillo",
    //     "Fennec Fox"
    // ], 
    // Body: [
    //     "Head",
    //     "Hands",
    //     "Arms",
    //     "Elbow",
    //     "Knees",
    //     "Back"
    // ], 
    // Furnitures: [
    //     "Chair",
    //     "Table",
    //     "Desk",
    //     "Bed",
    //     "Coffee Table",
    //     "Cabinet"
    // ]

// API OPTION
// // random english word API
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/randomword',
//     headers: { 'X-Api-Key': 'nlmxQGWnUrUfUVpADnT7FQ==ZRbOyJtZjsnbtgFr'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

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

let randomWord = words[Math.floor(Math.random() * words.length)];
// console.log(randomWord);


// let options = function () {
//     letterButtons = document.getElementById('categ-buttons')
//     alphabet = document.createElement('ul')

//     for (let i = 0; i < letters.length; i++) {
//         // const element = array[i];
//        alphabet.id = 'selection'
//        list = document.createElement('li')
//         list.innerHTML = letters[i];
//         letterButtons.appendChild(alphabet);
//         letters.appendChild(list);
//     }

// }

const correctAns = [];
const wrongAns = [];

// display correct word
