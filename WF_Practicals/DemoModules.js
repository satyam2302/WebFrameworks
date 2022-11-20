var http = require('http');
var dt = require('./modules')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("the date and time are currently:"+dt.myDateTime());
    res.end();
}).listen(8000);