/* Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x no es divisible entre 2*/

const numeroUsuarioPalabra = prompt("Dame un número y te diré si es divisible entre dos.");

console.log(typeof numeroUsuarioPalabra);
// console.log(parseFloat(numeroUsuarioPalabra) / 2);
console.log(parseFloat(numeroUsuarioPalabra) % 2); // 0 divisible => 1 no es divisible
if((parseFloat(numeroUsuarioPalabra)% 2) === 0) {
    alert("Es divisible!!!!");
} else { // else if((parseFloat(numeroUsuarioPalabra)% 2) === 1)
    alert("No es divisible!!!!");
}


/* Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x no es divisible entre 2*/
