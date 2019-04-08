var https = require('https');

console.log('I did it!');

var options = {
  host: 'www.example.org',
  path: '/Lighthouse⁩/w1we⁩/http_Client_and_streams/https_example.js'
};

// called by https when the request is made.
var callback = function() {
  console.log('In response handler callback!');
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");