 // (function (exports, require, module, __dirname, __filename ) {

// })
// const chalk = require('chalk'); // подключаем пакеты чалк
// const text_export = require('./data'); // подключаем файл
// console.log(chalk.blue('Helo Node')); // красим надпись в консоли с помощью пакета chalk
// console.log(__dirname); // выводим в консоль название дир-и
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => { // берем название директории, данную директорию (public), потом сам файл
  //     if (err) {
  //       throw err
  //     }
  //
  //     res.writeHead(200, {
  //       'Content-type': 'text/html' // так же вместо html, можем указать plain где нам придет текст, который не парсится.
  //     })
  //
  //     res.end(data)
  //     // res.end("<h1>hello Node JS!!!</h1>"); // здесь мы можем так же передать h1
  //   })
  // } else   if (req.url === '/contact') {
  //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
  //       if (err) {
  //         throw err
  //       }
  //
  //       res.writeHead(200, {
  //         'Content-type': 'text/html' // так же вместо html, можем указать plain где нам придет текст, который не парсится.
  //       })
  //
  //       res.end(data)
  //       // res.end("<h1>hello Node JS!!!</h1>"); // здесь мы можем так же передать h1
  //     })
  //   }

  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url) // берем название директории, данную директорию (public), потом сам файл и после узнаем, чем является наш запрос.
  const ext = path.extname(filePath)
  let contentType = 'text/html'

  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  if (!ext) {
    filePath += '.html'
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {
        'Content-Type': contentType
      })
      res.end(content)
    }
// console.log('123');
  })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`)
})
