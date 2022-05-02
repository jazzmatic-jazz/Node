/*5. SPLIT THE QUERY STRING */

var http = require('http');
var url = require('url');

http.createServer(function(req, res)
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query; //easily split the query string into readable
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);

//http://localhost:8080/?year=2017&month=July
//http://localhost:8080/?year=2002&month=jan