var event = require('events');
var emitter = new event.EventEmitter();

var connectHandler = function(){
	console.log("Connection established");
	emitter.emit("data_received");
}

var dataHandler = function(){
	console.log("data received");
};
var fn = function(evName,evListener){
	console.log("New listener is added");
};

emitter.on("newListener",fn);

emitter.addListener("connection",connectHandler);
emitter.addListener("data_received",dataHandler);

emitter.emit("connection");

console.log("End");