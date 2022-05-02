/* 1 */

//to include module use the require function
var http = require('http');//http is the module
//To make Node.js act as an HTTP server

//including the module
var dt = require('./myfirstmodule'); // ./ to locate the module and it is in same folder

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("the date and time currently are:" + dt.myDateTime());
  //res.end('Hello World!');
  res.end();
}).listen(8080);