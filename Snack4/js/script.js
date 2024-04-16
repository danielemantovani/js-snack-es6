// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

// Soluzione: 
// 1. Creo un array di oggetti
// 2. Creo un secondo array in vuoto che abbia lo stesso numero di elementi nel primo ma al posto di inserire l'età scriverò se è idoneo a guidare o meno

let idoneo = [];

const persone = [
    {
        username : "Daniele",
        lastname : "Mantovani",
        età : 29
    },
    {
        username : "Giulia",
        lastname : "Verdi",
        età : 29
    },
    {
        username : "Mario",
        lastname : "Rossi",
        età : 52
    },
];

