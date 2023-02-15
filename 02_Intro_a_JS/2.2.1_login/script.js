// 1 definir una constante con el elemento

const listInputs = [
    {
        type: 'text',
        label: 'Nombre',
        value: '',
        placeholder: 'Ingresa tu nombre',
        id: 'name',
        extraClass: '',
        required: true,
    },
    {
        type: 'email',
        label: 'Email',
        value: '',
        placeholder: 'Ingresa tu correo electrónico',
        id: 'email',
        extraClass: '',
        required: true,
    },
    {
        type: 'password',
        label: 'Contraseña',
        value: '',
        placeholder: 'Ingresa tu contraseña',
        id: 'password',
        extraClass: '',
        required: true,
    },
];
// 2 definimos una funcion
/* 
function createInputs () {

}; */

const createInputs = (inputs) => {
    const sectionInputsHTML = document.getElementById('section--inputs');
    /* 
    const myInputs = [];
    for(input of inputs) {
        const myInput = document.createElement("INPUT");
        for(property in input){
            myInput.setAttribute(property, input[property]);
        }
        console.log(myInput);
        sectionInputsHTML.appendChild(myInput);
        myInputs.push(myInput);
        
    };
     */
    /* 
    const functionMap = (input) => {
        const myInput = document.createElement("INPUT");
        for(property in input){
           myInput.setAttribute(property, input[property]);
        }
        sectionInputsHTML.appendChild(myInput);
        return myInput;
    }; */

    const myInputs = inputs.map((input) => {
        const myInput = document.createElement("INPUT");
        for(property in input){
           myInput.setAttribute(property, input[property]);
        }
        sectionInputsHTML.appendChild(myInput);
        return myInput;
    });

    console.log(myInputs);
};


console.log(createInputs);
// usar funcion
createInputs(listInputs);









  /* 


  const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  }
  
  ;
  console.log(Object.values(object1));
  // Expected output: Array ["somestring", 42, false]
  const myArregloDeValoresDelObjeto = Object.values(object1);
  
  const myArregloDEvueltoPorElMAp = myArregloDeValoresDelObjeto.map((elemento)=>{
      return `valor : ${elemento}`;
  });
  
  console.log(myArregloDEvueltoPorElMAp);


  sole.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
const myArregloDeValoresDelObjeto = Object.keys(object1);

const myArregloDEvueltoPorElMAp = myArregloDeValoresDelObjeto.map((key)=>{
	return `keys : ${key}, ${object1[key]}`;
});

console.log(myArregloDEvueltoPorElMAp); */






























/* const myFunction = (unaVariableDeTipoDefinicionDeFuncionQueVaARecibir2y3, numero) => {
    // uso numero como una variable cualquiera

    // uso unaVariableDeTipoDefinicionDeFuncion como una funcion cualquiera
    unaVariableDeTipoDefinicionDeFuncion(2, 3);
};

const laFuncionAEjecutar = () => {
    console.log('hola')
    return 1;
};

const laFuncionAEjecutar2 = () => {
    console.log('heeey')
    return 1;
};

const laFuncionAEjecutar3 = (a, b) => {
    console.log(a + b);
    return 1;
};


myFunction(laFuncionAEjecutar);

myFunction(laFuncionAEjecutar2);

myFunction(laFuncionAEjecutar3); */