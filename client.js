var http = require("http");

var options = {
	'host':'127.0.0.1',
	'port':'1234',
	'path':'/new.txt'
}

var callback = function(response){

	var data = "";

	response.on('data',function(val){
		data+=val;
	});
	response.on('end',function(){
		console.log(data);
	});
};

var req = http.request(options,callback);
req.end();

// var http = require('http');

// // Options to be used by request
// var options = {
//    host: 'localhost',
//    port: '1234',
//    path: '/new.txt'
// };

// // Callback function is used to deal with response
// var callback = function(response){
//    // Continuously update stream with data
//    var body = '';
//    response.on('data', function(data) {
//       body += data;
//    });

//    response.on('end', function() {
//       // Data received completely.
//       console.log(body);
//    });
// }
// // Make a request to the server
// var req = http.request(options, callback);
// req.end();