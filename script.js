


// make randomized categories
// https://www.kirupa.com/html5/picking_random_item_from_array.htm
let categories = ['Song', 'Country', 'Birds', 'Mammals', 'Body', 'Furnitures'];


let random = categories[Math.floor(Math.random() * categories.length)]
console.log(random);




// // letter options
// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z'];



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