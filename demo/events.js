const EventEmitter = require('events')
const { disconnect } = require('process')

// const emmiter = new EventEmitter();

// emmiter.on('anything', data => {
//     console.log('anything : ', data);
// })

// emmiter.emit('anything', {a: 1})

class Dispatcher extends EventEmitter{
    subscribe(eventName, cb) {
        console.log('[Subscribe...]')
        this.on(eventName, cb)
    }
    
    dispatch(eventName, data){ 
        console.log('[DISPATCHING...]')
        this.emit(eventName, data)
    }
}

const disp = new Dispatcher();

disp.subscribe('anyThing', data => {
    console.log('ON anyThing : ', data);
})

disp.dispatch('anyThing', {abc: 123})