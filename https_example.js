var https = require('https');

console.log('I did it!');

var options = {
  host: 'www.google.com',
  path: '/Users/marianahorvat/lighthouse/w1we/http_Client_and_streams'
};

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');
  console.log('Response: ', response);
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");