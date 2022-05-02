/*The Built-in URL Module */

//Parse an address with the url.parse() method,
//and it will return a URL object with each part of the address as properties

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2002&month=jan'
var q = url.parse(adr, true);

console.log(q.host); //returns hostname 'localhost:8080'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?year=2002&month=jan'

var qdata = q.query; // returns an object:{ year:2002, month:'jan'}
console.log(qdata.month)// returns 'jan'
