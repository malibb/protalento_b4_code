const request = require('request');
const otra_url= 'https://swapi.dev/api/people/?search=chewbacca';
const url = "https://api.giphy.com/v1/gifs/search?api_key=D6u6lCnX1pCnRzf22inBq9hdUkc6LRcz&q=gatitos&limit=5&offset=0&rating=g&lang=es"

function callback(error, response, body) {
    // console.log(error, body);
    if(response.statusCode === 200) {
        const listaGifs = JSON.parse(body);
        // console.log(listaGifs.data);
        // console.log(Object.keys(json), json.name)
       for (const gif of listaGifs.data) {
            console.log(gif.url);
       }
    }
    console.log(response.url);
    console.log(response.statusCode);
    console.log(response.statusMessage);
}

request.get(url,callback);
