const server = require('http-server');

const PORT = 8080;

server.createServer().listen(PORT);

console.log('server is listening on ' + PORT);