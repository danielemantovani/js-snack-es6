// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. 

// Soluzione;
// 1. Estrarre i 10 oggetti auto dall'array
// 2. Creare 3 nuovi array vuoti uno per ogni alimentazione
// 3. Dai  10 oggetti estrapolati confrontare l'alimentazione di ogni auto e mettere l'auto nell'array di riferimento 

const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
];

let veicoliBenzina = [];
let veicoliDiesel = [];
let altraAlimentazione = [];


automobili.forEach ((curAuto) => {
    if (curAuto.alimentazione === "benzina"){
        veicoliBenzina.push (curAuto);
    } else if (curAuto.alimentazione === "diesel") {
        veicoliDiesel.push (curAuto);
    } else { curAuto !== "benzina" && curAuto !== "diesel"
        altraAlimentazione.push (curAuto);
    }
});

console.log(veicoliBenzina);
console.log(veicoliDiesel);
console.log(altraAlimentazione);

// benzina = automobili.filter ((curAuto) => {
// // console.log( curAuto);
//     if (curAuto.alimentazione === "benzina") {
//         return true
//     } else {
//         return false
//     }
// });

// console.log(benzina);

// diesel = automobili.filter ((curAuto) => {
//     if (curAuto.alimentazione === "diesel"){
//         return true
//     } else {
//         return false
//     }
// });

// console.log(diesel);

// altraAlimentazione = automobili.filter ((curAuto) => {
//     if (curAuto.alimentazione !== benzina && curAuto.alimentazione !== diesel){
//         return true
//     } else {
//         return false
//     }
// });

// console.log(altraAlimentazione);

