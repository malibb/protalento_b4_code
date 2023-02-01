

function myFunction() {
    const inputs = document.getElementsByName('fav_language');
    console.log(inputs);

    for (let i = 0; i < inputs.length; i++) {
        // es esto inputs[i].checked === true
        if (inputs[i].checked){
            console.log(inputs[i].id);
            insertarHTML(inputs[i].value, "resultado");
        }
    }
  }

function insertarHTML(value, id){
    const newtext = document.createTextNode(value);
    const elementoResultado = document.getElementById(id); 
    elementoResultado.innerHTML = "";
    elementoResultado.appendChild(newtext);

}