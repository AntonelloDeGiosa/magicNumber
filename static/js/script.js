function generaNumero(min = 1, max = 100) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const x = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // Aggiunto +1 per includere max
    return x;
}

function sanitize(numero) {
    const sanificate = parseInt(numero.trim()); 
    if (isNaN(sanificate)) {
        console.log("Errore");
        
    } else {
        return sanificate;
    }
}

let tentativi = 5;
let indovinato = false;
const n = generaNumero(); // Numero da indovinare
let nInserito;

alert("BENVENUTO, INDOVINA IL NUMERO!!!");

while (tentativi > 0 && !indovinato) {
    console.log("Tentativi rimasti: " + tentativi);

    let insnum = prompt("Inserisci numero"); // Chiedi input all'utente
    nInserito = sanitize(insnum);

    if (isNaN(nInserito)) {
        console.log("Numero non valido ")
        indovinato=false
    }else if (nInserito > n) {
        console.log("Il numero '" + nInserito + "' è troppo grande");
        tentativi -= 1; // Riduci il numero di tentativi a ogni tentativo valido
    } else if (nInserito < n) {
        console.log("Il numero '" + nInserito + "' è troppo piccolo");
        tentativi -= 1; // Riduci il numero di tentativi a ogni tentativo valido
    } else if (nInserito === n) {
        console.log("Bravo, hai vinto!");
        indovinato = true;
    }

    
}

if (!indovinato) {
    console.log("Mi dispiace, hai perso. Il numero era " + n);
}

