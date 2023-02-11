(function () {
    'use strict';
    let $myIndex = {};
    self.$myIndex = $myIndex;

    function esDivisibleSobre2(numeroIngresado) {
        console.log('ya me ejecuté');
        if (typeof numeroIngresado === 'number') {
            if((parseFloat(numeroIngresado) % 2) === 0) {
                return "Es divisible!!!!";
            } else {
                return "No es divisible!!!!";
            }
        } else {
            return "No es válido";
        }
    }

    /* 
    
    hacer sus funciones
    
    
    */

    $myIndex.esDivisibleSobre2 = esDivisibleSobre2;
    
})();