var http = require('http');
var cookie = require('cookie');

http.createServer(function(request, response) {
    //console.log(request.headers.cookie);

    if(request.headers.cookie !== undefined) {
        var cookies = cookie.parse(request.headers.cookie);
    }

    console.log(cookies);

    /*
    response.writeHead(200, {
        'Set-Cookie' : [
            'yummy_cokkie=choco', 
            'tasty_cookie=strawberry',
        `Permanent=cookies; Max-Age=${60*60*24*30}`]
    }); */
    response.end("cookie!");
}).listen(3001);