
const crearElemento = (nombre, image) => {
    const personajeElement = document.createElement("div");
    const imagenElement = document.createElement("img");
    imagenElement.src = image;
    const nombrePersonaje = document.createTextNode(nombre);
    personajeElement.appendChild(nombrePersonaje);
    personajeElement.appendChild(imagenElement);
    return personajeElement;
}

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    // console.log(data.results);
    const personajesDiv = document.getElementById("personajes");
    data.results.map((elemento) => {
        personajesDiv.appendChild(crearElemento(elemento.name, elemento.image));
        console.log('elemento', elemento.name);
    })
  })
  .catch(error => {
    console.error(error);
  });
