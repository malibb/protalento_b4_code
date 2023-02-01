const problemas = [
    { 
        problema: "Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.",
        myFunct : function generar10Randoms() {
            const arry = [];
            for(let i = 0; i < 10; i++) {
                arry.push(Math.floor(Math.random() * 100));
            }
            return arry;
        },
    },
    { 
        problema: "Convertir las palabras ingresadas en un array",
        myFunct : function separadorPalabras(palabraUsuario) {
            return palabraUsuario.split(",");
        },
        inputs: [
            { type: 'text', text: "Ingresar un string con varias palabras separadas por coma" }
        ]
    },
];

function ejercicio(numero) {
    const valoresIngresados = [];
    if ('inputs' in problemas[numero] ) {
        for(input in problemas[numero].inputs.length) {
            valoresIngresados.push(document.getElementById(`input}-${input}-ejercicio${numero}`).value);
        }
    }
    return problemas[numero].myFunct(...valoresIngresados);
}

function creadorProblema(problema, myFunct, inputs){
    const newDiv = document.createElement('div');
}

function creadorProblemas() {
    for (problema in problemas) {
        creadorProblema(problema.problema, problema.myFunct, problema.inputs);
    }
}

/* 
De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo. */