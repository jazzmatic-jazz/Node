/*3. */

var http = require('http');

//create a server object
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'}); //Http header to display the content in the HTML format
    //200 means that all is OK,  argument is an object
    res.write('hello World'); //write a response to client
    res.end(); // end the response
}).listen(8080); // server  object listens at port 8080