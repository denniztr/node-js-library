const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {

   
})

server.listen(port, hostname, () => {
    console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
  });