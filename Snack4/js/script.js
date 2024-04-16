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
        età : 15
    },
    {
        username : "Mario",
        lastname : "Rossi",
        età : 52
    },
];

const idoneità = persone.map ((curPersona) => {
    console.log(curPersona);
    if ( curPersona.età >= 18){
        return `${curPersona.username} ${curPersona.lastname} è idoneo/a alla guida`
    } else {
        return ` ${curPersona.username} ${curPersona.lastname} non è idoneo/a alla guida`
    }
});

console.log(idoneità);