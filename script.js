// Chiedere all’utente di inserire una parola e creare una funzione per capire se la parola inserita è palindroma

let parola = prompt('parola da controllare');
function palindroma(parola) {
    const reversp = parola.split('').reverse().join('');
    return parola === reversp;
}
console.log(palindroma(parola));

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
let scelta = prompt('Scegli pari o dispari?');
let numero = parseInt(prompt('Inserisci un numero da 1 a 5'));
//genero per il computer
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let numeroComputer = numeroRandom(1, 5);
console.log(numeroComputer);
//sommo i due valori numerici
function sommaNumeri(numero, numeroComputer) {
    return numero + numeroComputer
}
//controllo se è pari così da poter stabilire il vincitore 
if (sommaNumeri(numero, numeroComputer) % 2 === 0) {      
    console.log('pari');
} else{
    console.log('dispari');
}
//stabilisco il vincitore
if (scelta === 'pari' && sommaNumeri(numero, numeroComputer) % 2 === 0){
    console.log('Hai vinto');
}else if (scelta === 'dispari' && sommaNumeri(numero, numeroComputer) % 2 !== 0){
    console.log('Hai vinto');
}else {
    console.log('Hai perso');
}






