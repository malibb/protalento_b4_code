/* Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x no es divisible entre 2*/

// verificarNumeroPar
// esDivisible
// esPar
// -> dividiendoNumeros

function esDivisible1() {
    const numeroIngresado = prompt("Dame un número y te diré si es divisible entre dos.");
    // console.log(typeof numeroIngresado);
    // console.log(parseFloat(numeroUsuarioPalabra) / 2);
    // console.log(parseFloat(numeroIngresado) % 2); // 0 divisible => 1 no es divisible
    if((parseFloat(numeroIngresado) % 2) === 0) {
        return "Es divisible!!!!";
    } else { // else if((parseFloat(numeroUsuarioPalabra)% 2) === 1)
        return "No es divisible!!!!";
    }
}

function esDivisible2(numeroIngresado) {
    if((parseFloat(numeroIngresado) % 2) === 0) {
        return "Es divisible!!!!"
    } else { // else if((parseFloat(numeroUsuarioPalabra)% 2) === 1)
        return "No es divisible!!!!";
    }
}

function ejercicio1(){
    const valorIngresado = document.getElementById("input-ejercicio-1").value;
    
    const newtext = document.createTextNode(esDivisible2(valorIngresado));
    /* document.getElementById("resultado-1").innerHTML = "";
    document.getElementById("resultado-1").appendChild(newtext); */
    const elementoResultado = document.getElementById("resultado-1"); 
    elementoResultado.innerHTML = "";
    elementoResultado.appendChild(newtext);
}
/* 
const mensajeDevuelto1 = esDivisible1();
console.log(mensajeDevuelto1);

console.log(esDivisible1());

 

const mensajeDevuelto2 = esDivisible2(prompt("Dame un número y te diré si es divisible entre dos."));
console.log(mensajeDevuelto2);


console.log(esDivisible2(prompt("Dame un número y te diré si es divisible entre dos.")));



const numeroIngresadoFuncion2 = prompt("Dame un número y te diré si es divisible entre dos.");
const mensajeDevuelto2 = esDivisible2(numeroIngresadoFuncion2);
console.log(mensajeDevuelto2);
*/


/* Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x no es divisible entre 2*/
