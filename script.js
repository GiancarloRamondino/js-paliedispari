// Chiedere all’utente di inserire una parola e creare una funzione per capire se la parola inserita è palindroma

let parola = prompt('parola da controllare');
function palindroma(parola) {
    const revers = parola.split('').reverse().join('');
    return parola === revers;
}
console.log(palindroma(parola));

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

let  scelta = prompt('Scegli pari o dispari?');
let numero =  parseInt(prompt('Inserisci un numero da 1 a 5'));
function numeroRandom (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let  numeroComputer  =  numeroRandom(1,5);
console.log(numeroComputer);

