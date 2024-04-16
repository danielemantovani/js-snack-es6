// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// test
// alert ("football team");

const footballTeam = [
    {
        teamName : "Inter",
        foulsRecived : 0,
        points : 0,
    },
    {
        teamName : "Cosenza",
        foulsRecived : 0,
        points : 0,
    },
    {
        teamName : "Parma",
        foulsRecived : 0,
        points : 0,
    },
    {
        teamName : "Cagliari",
        foulsRecived : 0,
        points : 0,
    }
];



//uso forEach e non map in quanto per adesso non è necessario generare un nuovo array
footballTeam.forEach((curTeam) => {
    curTeam.foulsRecived = Math.floor(Math.random() * 500);
    curTeam.points = Math.floor(Math.random() * 200);
});

console.log(footballTeam);

const newTeam = footballTeam.map ((curTeam) =>{
    const {teamName , foulsRecived} = curTeam
    return {teamName , foulsRecived}
});

console.log(newTeam)








