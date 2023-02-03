const name = "Index"
let cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
  ];
  localStorage.setItem('cuentas', JSON.stringify(cuentas));
  cuentas = localStorage.getItem('cuentas');
  console.log(JSON.parse(cuentas));
const aumentarSaldo = () => {
    cuentas = JSON.parse(localStorage.getItem('cuentas'));
    cuentas[0].saldo += 100;
    localStorage.setItem('cuentas', JSON.stringify(cuentas));
}

const function1 = () => {
    // traer el valor del input radio en html => consultar
    // mandar el valor a la funcion que eligio

}

const myFunction = () => {
    let contadorLocal = localStorage.getItem('contador');
    console.log(contadorLocal);
    if (contadorLocal == null) {
        contadorLocal = 0;
        console.log('cero');
    } else {
        debugger;
        console.log(typeof contadorLocal);
        contadorLocal = parseInt(contadorLocal);
    }
    contadorLocal += 1;
    localStorage.setItem('contador', contadorLocal);
    console.log(contadorLocal);
    return "sumé";
};