var http = require("http");
var fs = require("fs");

http.createServer(function(request,response){

    fs.readFile('new.txt',function(err,data){
    	if(err){
    		console.error(err);
    		return;
    	}
        console.log(data.toString());
    });

}).listen(1234);

console.log("Server at localhost:1234");
