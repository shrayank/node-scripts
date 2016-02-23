var fs = require("fs");
var zlib = require("zlib");

var FILE = 'new.txt';

fs.createReadStream(FILE).pipe(zlib.createGzip()).pipe(fs.createWriteStream(FILE+'.gz'));

fs.stat(FILE+'.gz',function(err,data){
	if(err)
	{
		console.error(err);
		return;
	}
	console.log("File compressed");
})