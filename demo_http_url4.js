/*READ THE QUERY STRING 4.*/

var Http = require('http');

Http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url); //"url" which holds the part of the url that comes after the domain name
    res.end();
}).listen(8080);

// req argument in line 3 that represents the request from the client, as an object (http.IncomingMessage object).