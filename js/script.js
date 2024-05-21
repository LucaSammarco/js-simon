
// ! Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//         // HC
//             * Generiamo 5 numeri random controllando che siano unici v
//             * Inseriamo in pagina i 5 numeri v
//             * Impostiamo un timer che al termine del quale inserisca display:none al contenitore dei numeri.
//             * 5 prompt all utente 
//             * Verifichiamo se i numeri inseriti sono presenti nell array dei numeri e contiamo quanti sono uguali




const sezioneNumeri = document.querySelector('#numbers');
let sezioneVisibile = true;

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

numberGenerator()

function numberGenerator() {
    numeriGenerati = []
    
    const numeriDaGenerare = 5

    

    while (numeriGenerati.length < numeriDaGenerare) {
        let numero = getRandomInt(10);
        if (!numeriGenerati.includes(numero)) {
            numeriGenerati.push(numero);
        }
    }
    
    for (let index = 0; index < numeriGenerati.length; index++) {
        const nuovoP = document.createElement('p');
        nuovoP.textContent = numeriGenerati[index];
        sezioneNumeri.appendChild(nuovoP);
    }
}

function userNumbers() {
    numeriUtente = prompt("inserisci numero")
}


function classeepromt() {
    sezioneNumeri.classList.add('none');
    sezioneVisibile = false;

    setTimeout(userNumbers, 50)
       
}


setTimeout(classeepromt, 1000);

