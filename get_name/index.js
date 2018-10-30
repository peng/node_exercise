const http = require('http');
const fs = require('fs');

const server = http.createServer().listen(4000,'localhost');

function startServer(request,response) {
  if (request.methods === 'POST' ) {

  } else {
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'./components/404.html','utf8').pipe(response);
  }
}