// EventEmitter

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User Logged', data => {
    console.log(data);
});

emitter.emit('User logged', {user: 'Rômulo Vieira' });