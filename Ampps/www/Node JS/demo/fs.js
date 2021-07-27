// File System
const fs = require('fs') // позволяет работать с различными файлами.
const path = require('path') // чтобы работать с "путями", мы должны их подключить

// fs.mkdir(path.join(__dirname, 'test'), (err) => { // создание папки и в call back функции первым параметром передается ошибка
//   if (err) {
//     throw err
//   }
//
//   console.log('Папка создана')
// })



const filePath = path.join(__dirname, 'test', 'text.txt') // создание файла в папке text
//
// fs.writeFile(filePath, 'Hello NodeJS!', err => { // writeFile- перетирает контент
//   if (err) {
//     throw err
//   }
//
//   console.log('Файл создан')
//
//   fs.appendFile(filePath, '\nHello Again!', err => { // appendFile - Добавляет контент
//     if (err) {
//       throw err
//     }
//
//     console.log('Файл создан')
//   })
// })



fs.readFile(filePath, 'utf-8', (err, content) => { // readFile - прочтение файлов. Елси мы не укажем const data, которая равна Buffer, то нам выведет в консоль просто буффер, а так же если уберем кодировку
  if (err) {
    throw  err
  }
//
  console.log(content)
//
//   // const data = Buffer.from(content)
//   // console.log('Content: ', data.toString())
})
