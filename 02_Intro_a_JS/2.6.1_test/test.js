(function(){
    'use strict';
    
    /**
     * test function
     * @param {string} desc
     * @param {function} fn
     */
    function it(desc, fn) {
      try {
        fn();
        console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
      } catch (error) {
        console.log('\n');
        console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
        console.error(error);
      }
    }

    function assert(isTrue) {
        if (!isTrue) {
          throw new Error();
        }
    }


    it('Debe fallar', function () {
        assert(1 !== 1);
    });

    it('Debe pasar', function () {
        assert(1 === 1);
    });

    it('esDivisibleSobre2 funcione con numeros', function () {
        assert($myIndex.esDivisibleSobre2(2) === "Es divisible!!!!");
    });

    it('esDivisibleSobre2 que no se muera con textos como "hola amigos"', function () {
        assert($myIndex.esDivisibleSobre2("hola amigos") === "No es válido");
    });

    it('esDivisibleSobre2 no se muera con arreglos [2]', function () {
        assert($myIndex.esDivisibleSobre2([2]) === "No es válido");
    });
  })();