var http = require("http");
var url = require("url");
var fs = require("fs");


http.createServer(function(req,res){
	var path = url.parse(req.url).pathname;
	path = path.substr(1);
	console.log("pathname requested: "+path);
	fs.readFile(path,function(err,data){
		if(err)
		{
			console.log(err.stack);
			res.writeHead(404,{'Content-Type':'text/html'});
		}
		else
		{
			console.log(data.toString());
			res.writeHead(200,{'Content-Type':'text/html'});
			// res.writeHead(path);
			res.write(data.toString());
		}
		res.end();

	})

}).listen(1234);

console.log("Server @ 1234...");