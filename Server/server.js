var http = require('http');
var fs = require('fs');

var host = '127.0.0.1';
var port = '3000';

fs.readFile('./index.html', function(err, html){
  if(err){
    console.log(err);
    return;
  }

  var server = http.createServer(function(req, res){
    res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');
   res.write('html');
   res.end('Hello World');
  });
server.listen(port, host, function(){
  console.log('server running on port '+port);

  });

});