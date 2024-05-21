
let numeriGenerati = []

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  }

  for (let index = 1; index <= 5; index++) {
    let numero = getRandomInt(10);
    numeriGenerati.push(numero)
    
  }