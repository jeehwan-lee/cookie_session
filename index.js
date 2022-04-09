var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {
        'Set-Cookie' : ['yummy_cokkie=choco', 'tasty_cookie=strawberry']
    });
    response.end("cookie!");
}).listen(3001);