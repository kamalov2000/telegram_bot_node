const http = require('http');

const server = http.createServer((req, res) => {
  res.end("<h1>hello Node JS</h1>"); // здесь мы можем так же передать h1
})

server.listen(3000, () => {
  console.log("Server has bin started...");
});
