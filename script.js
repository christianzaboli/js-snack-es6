// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// array di oggetti
const arrayBici = [

    {
    brand : "Trek",
    peso : 12
},
    {
    brand : "Cannondale",
    peso : 15
},
    {
    brand : "Specialized",
    peso : 10
},
    {
    brand : "Cervélo",
    peso : 10
},
    {
    brand : "Pininfarina",
    peso : 8
},

];

// ciclo l'array di biciclette

let biciLeggera = arrayBici[0];     // salvo in un let la prima bicicletta per iniziare da qualche parte

for (let i = 0; i < arrayBici.length; i++) {
  if (arrayBici[i].peso < biciLeggera.peso) {       // se la bici ciclata é piú leggera di quella salvata in biciLeggera
    biciLeggera = arrayBici[i];         // la bici salvata viene sovrascritta
  }
}
console.log('La bicicletta piú leggera é', biciLeggera);



// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// array delle squadre
const squadreDiCalcio = [

    {
    nome : 'Milan',
    'punti fatti' : 0,
    'falli subiti' : 0,
},
    {
    nome : 'Juventus',
    'punti fatti' : 0,
    'falli subiti' : 0,
},
    {
    nome : 'Inter',
    'punti fatti' : 0,
    'falli subiti' : 0,
},
    {
    nome : 'Napoli',
    'punti fatti' : 0,
    'falli subiti' : 0,
},

]

// funzione per generare un numero random
function numRandomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ciclo in cui vengono sovrascritti con numeri random gli oggetti dell'array
for (let i = 0; i < squadreDiCalcio.length; i++) {
    squadreDiCalcio[i]['punti fatti'] = numRandomGen(0, 5);
    squadreDiCalcio[i]['falli subiti'] = numRandomGen(0, 5);
}
console.log('Numeri random per punti e falli', squadreDiCalcio);

// ciclo in cui vengono inseriti i nomi e i falli subiti delle rispettive squadre
const squadreFalli = []
for (let i = 0; i < squadreDiCalcio.length; i++) {
    x = {...squadreDiCalcio[i]}; 
    delete x['punti fatti'];
    squadreFalli.push(x);
}
console.log('Array con il nome delle squadre e falli, senza punti', squadreFalli);

