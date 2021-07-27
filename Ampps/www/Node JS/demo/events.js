//модуль, который представляет ядро Node JS
const EventEmitter = require('events') // подключаем модуль events

// const emitter = new EventEmitter() // создаем emitter от класса EventEmitter
//
// emitter.on('anything', data => { // прослушка объектов с помощью метода .on
//   console.log('ON: anything', data)
// })
//
// emitter.emit('anything', {a: 1}) // первым пар-м мы передаем то, что лежит в прослушке. После же передаем данные, которые хотим передать
// emitter.emit('anything', {b: 2})
//
// setTimeout(() => {
//   emitter.emit('anything', {c: 3})
// }, 1500)

class Dispatcher extends EventEmitter { // наследуюемся от данного класса.
  subscribe(eventName, cb) { // принимаем eventName и callback ф-ю
    console.log('[Subscribe...]')
    this.on(eventName, cb) // можем использовать метод .on, который наследуюется от класса EventEmitter
  }

  dispatch(eventName, data) {
    console.log('[Dispatching...]')
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher() // так же создаем экземпляры от нашего класса

dis.subscribe('aa', data => {
  console.log('ON: aa', data)
})

dis.dispatch('aa', {aa: 22}) // если вынесем dispatch выше subscribe, то subscribe не сработает. 
