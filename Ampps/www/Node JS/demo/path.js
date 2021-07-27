const path = require('path')

console.log('Название файла: ', path.basename(__filename))

console.log('Имя директории: ', path.dirname(__filename))

console.log('Расширение файла: ', path.extname(__filename))

console.log('Parse: ', path.parse(__filename).name) // - если убрать name, то будет более подробная инфа

console.log(path.join(__dirname, 'server', 'index.html')) //- здесь можно получить путь до файла, если его вызвать node path.js
