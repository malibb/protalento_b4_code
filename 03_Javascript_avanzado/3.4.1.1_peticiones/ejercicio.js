const request = require('request');

request({
    method: "GET",
    url:"https://rickandmortyapi.com/api/character/2"
}, function ( error, response, body) {
    // console.log(body);
    const bodyJSON = JSON.parse(body);
    console.log(bodyJSON.name);
});