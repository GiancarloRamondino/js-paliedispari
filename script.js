// Chiedere all’utente di inserire una parola e creare una funzione per capire se la parola inserita è palindroma

let parola = prompt('parola da controllare');
function palindroma(parola) {
    const revers = parola.split('').reverse().join('');
    return parola === revers;
}
console.log(palindroma(parola));

//