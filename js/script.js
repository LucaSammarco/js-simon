
let numeriGenerati = []

const numeriDaGenerare = 5

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  }

//   for (let index = 1; index <= 5; index++) {
//     let numero = getRandomInt(10);
//     numeriGenerati.push(numero)
    
//   }

// while (numeriGenerati.length < 6) {
//     let index = []
// }


// function generateUniqueNumbers(numeriDaGenerare) {
//     let numero = [];
//     while (numeriGenerati.length < numeriDaGenerare) {
//         let  = getRandomInt(10);
//         if (!bombsCells.includes(bombNum)) {
//             bombsCells.push(bombNum);
//         }
//     }
//     return bombsCells;
// }


  while (numeriGenerati.length <= numeriDaGenerare - 1 ) {
    
    let numero = getRandomInt(10);
        if (!numeriGenerati.includes(numero)) {
            numeriGenerati.push(numero)
        }
    
  }


//   while (condition) {
    
//   }