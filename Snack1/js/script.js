//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// test
// alert ("Bicycle");

const streetBicycle = [
    {
        model : "Trek Madone SLR 9 AXS Gen 7",
        weight : 7.36,
    },
    {
        model : "Canyon Speedmax CFR Disc Di2",
        weight : 9.10,
    },
    {
        model : "Specialized Tarmac S-Works SL8 Di2 ",
        weight : 6.62,
    },
    {
        model : "Scott Foil RC Ultimate",
        weight : 7.20,
    }
    
];

let bikeLessModel = "";
// inizializzo la variabile con un numero alto così che al confronto con la prima bici risulti la più leggera
let bikeLessWeight = 999;

streetBicycle.forEach ((curBicycle) => {
    // console.log(curBicycle);
    const {model, weight} = curBicycle
    // console.log(model, "il suo peso è di", weight, "kg");
    
    // se il peso della bici è minore rispetto al peso della bici messa a confronto durante l'esecuzione del ciclo for salva la bici e il peso della bici che è più leggera
    if (weight < bikeLessWeight) { 
        bikeLessModel = model;
        bikeLessWeight = weight;
    }
})

console.log( "Modello:", bikeLessModel, "Peso:", bikeLessWeight, "kg");

let printBike = document.getElementById ("light-bike");
// console.log(printBike);

printBike.innerHTML += `
La bici più leggera è ${bikeLessModel} con un peso di ${bikeLessWeight} kg
`