const name = "About"

const myFunction = () => {
    let contadorLocal = localStorage.getItem('contador');
    console.log(contadorLocal);
    if (contadorLocal == null) {
        contadorLocal = 0;
        console.log('cero');

    } else {
        console.log(typeof(contadorLocal));
        contadorLocal = parseInt(contadorLocal);
        console.log('parse');

    }
    contadorLocal -= 1;
    localStorage.setItem('contador', contadorLocal);
    console.log(contadorLocal);
    return "resté";
};

const consultarSaldo = () => {
    cuentas = JSON.parse(localStorage.getItem('cuentas'));
    alert(cuentas[0]["saldo"]);
}