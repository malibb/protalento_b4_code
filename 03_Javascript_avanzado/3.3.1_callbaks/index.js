//1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.

function funcionaInicial(nombre) {
    console.log("hola soy  funcion inicial")
}
  
function ejercicioNumeroUno(callback, mensaje) {
    callback(mensaje)
}

ejercicioNumeroUno(console.log, 'holis, hey')

setTimeout(function() {
    ejercicioNumeroUno(console.log, 'al fin 2')
}, 2000);

setTimeout(function() {
    for (let index = 0; index < 999; index++) {
        console.log(index);
    }
    console.log('Al fin!')
}, 2000);

