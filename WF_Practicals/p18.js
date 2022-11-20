//create a js file named main.js for event-driven application.
//there should be a main loop that listens for events and then triggers a callback function when one of those events is detected.


//import the events module
var events = require('events');

//create emitEmitter object
var eventEmitter = new events.EventEmitter();

//create an event handler as follows
var connectHandler = function connected(){console.log('connection successful')};

//fire data recerived event
eventEmitter.emit('data received');

//bind the connection event with the handler
eventEmitter.on('data received',connectHandler);

//bind the data received event with anonymous function
eventEmitter.on('data received',function(){
    console.log('data received successfully');
});

eventEmitter.emit('connection');

console.log('program ended')