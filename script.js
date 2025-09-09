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

let biciLeggera = arrayBici[0]; // Initialize with the first element

for (let i = 0; i < arrayBici.length; i++) {
  if (arrayBici[i].peso < biciLeggera.peso) {
    biciLeggera = arrayBici[i];
  }
}
console.log('La bicicletta piú leggera é', biciLeggera); // Output: 5


// console.log(biciLeggera);
















// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.