
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente se pari o dispari e chiedo di inerire un numero da 1 a 5

let userEvenOrOdd =prompt("Inserisci Pari o Dispari");
let userNumber =parseInt(prompt("Inserisci un numero da 1 a 5"));

// Genero un numero random da 1 a 5 per il computer usando una funzione

let randomPc = twoNumbers(1,5);
console.log(twoNumbers);

function twoNumbers(min,max) {
    Math.floor(Math.random() * (max - min + 1)) + min ;
}

// Sommo i due numeri 

function twoNumbSom(num1, num2) {
    let som = num1 + num2;
    console.log(som);

    return som;
}

function twoNumbSom(num1, num2) {
    if(num1 % 2 === 0) {
        alert("La somma è pari ");
    }
    else{
        alert("La somma è dispari");
    }
}