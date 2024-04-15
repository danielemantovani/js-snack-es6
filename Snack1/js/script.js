//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// estraggo gli oggetti dall'array
// metto a confronto il peso dei diversi oggetti
// stampo solo quello che pesa di meno 

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

// console.log(streetBicycle);

streetBicycle.forEach ((curBicycle) => {
    console.log(curBicycle);
    // const bikeInfo = { model, weight} = streetBicycle
    // console.log(bikeInfo);
    
})