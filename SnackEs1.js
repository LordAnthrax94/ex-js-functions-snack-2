// Snack 1

// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

function somma(num1, num2) {
  return num1 + num2
};

let somma = function(num1, num2){
  return num1 + num2
};

let somma = (num1, num2) =>  num1 + num2;


// Snack 2

// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (numero) =>  numero * numero 

console.log(quadrato(10));


// Snack 3

// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

function somma (num1, num2) {
  return num1 + num2
}

function moltiplicazione (num1, num2) {
  return num1 * num2
}

function eseguiOperazione(num1, num2, operazione){
  return num1,num2(operazione)
}

console.log(9,5, somma);
console.log(9,5, moltiplicazione);

// Snack 4

// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".






