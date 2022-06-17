const http = require("http"), fs = require("fs");

function serveStaticFile(res, path, contentType, responseCode){
    if(!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err, data){
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('500 - Internal Server Error')
        } else {
            res.writeHead(responseCode, {'Content-Type': contentType})
            res.end(data)
        }
    })
}


http.createServer(function(req,res){
     var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
    console.log(path)
     switch(path){
        case '':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/home':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/contact':
            serveStaticFile(res, '/public/contact.html', 'text/html');
            break;
       default :
            serveStaticFile(res, '/public/notfound.html', 'text/html');
            break;
        
     }
}).listen(5000);

console.log("Server is running on port: 5000")