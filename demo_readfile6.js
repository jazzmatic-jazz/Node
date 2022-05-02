/*READ FILES ON THE SYSTEM */

//The fs.readFile() method is used to read files on your computer.

var http = require('http');
var fs= require('fs'); //file server

http.createServer(function(req, res)
{
    fs.readFile('node.html', function(err, data)
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);