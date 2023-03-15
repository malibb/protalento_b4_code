// 1 instalar request ---> npm install request
// 2 utilizar request 
const request = require('request');

// 3 Peticion con request 
// request.get("https://pokeapi.co/api/v2/pokemon/pikachu", function (error, response, body) {
//     if(response.statusCode === 200) {
//         // JSON.parse() --> funcion de JS que se utiliza para convertir el JSON que viene de la petición a un objeto JS
//         const json = JSON.parse(body);
//         console.log(json)
//     } else {
//         console.log('Erro, algo esta mal en la peticion')
//     }
// })

// 4 Reutilizar la petición 
const getPokemonByName = (pokemonName) => {
    request.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}` , function (error, response, body) {
    if(response.statusCode === 200) {
        // JSON.parse() --> funcion de JS que se utiliza para convertir el JSON que viene de la petición a un objeto JS
        const json = JSON.parse(body);
        // console.log(Object.keys(json), json.name)
        console.log(json.name)
    } else {
        console.log('Error, something went worng', error)
    }
})
}

getPokemonByName('Montse');
getPokemonByName('persian');
