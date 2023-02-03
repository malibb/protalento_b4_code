/* Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x no es divisible entre 2*/

// verificarNumeroPar
// esDivisible
// esPar
// -> dividiendoNumeros

let precioFinal = 0;
let precioMensualFinal = 0;
const programa = prompt("¿qué nivel ocupas o programa?")
if (programa === "Course" || programa === "Carrera" || programa === "Master") {
    const beca = prompt("¿tienes beca?, si si cual, si no dejar vacio");
    if (beca === "Beca Facebook" || beca === "Beca Google" || beca === "Beca Jesua" || beca === "") {
        if (programa === "Course") {
            precioFinal = 4999;
        } else if (programa === "Carrera") {
            precioFinal = 3999;
        } else if (programa === "Master") {
            precioFinal = 2999;
        }

        if (beca === "Beca Facebook") {
            precioFinal = precioFinal * (80/100);
        } else if (beca === "Beca Google") {
            precioFinal = precioFinal * (85/100);
        } else if (beca === "Beca Jesua") {
            precioFinal = precioFinal * (50/100);
        }

        precioMensualFinal = precioFinal;

        if (programa === "Course") {
            precioFinal = precioMensualFinal * 2;
        } else if (programa === "Carrera") {
            precioFinal = precioMensualFinal * 6;
        } else if (programa === "Master") {
            precioFinal = precioMensualFinal * 12;
        }
        /* let texto = ""
        if (beca !== "") {
            texto = "con beca"
        } 
        valor = condicion ? valor devuelto si es verdadera : valor devuelto si es falsa
        */
        alert(`Precio mensual ${beca !== "" ? "con beca" : ""} :${precioMensualFinal} Precio total: ${precioFinal}`)
    } else {
        alert('opcion invalida')
    }
} else {
    alert('opcion invalida')
}


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
