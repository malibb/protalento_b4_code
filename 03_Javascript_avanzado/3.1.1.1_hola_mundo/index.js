/* suma = 3 + 5;
console.log("Hello World!!");

const myfunction = (a) =>{
    return a;
}

console.log(myfunction(34));

alert('hola') */

const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});