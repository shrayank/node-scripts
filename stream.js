var stdin = process.openStdin();
var data="";

stdin.on('data',function(chunk){

	if(chunk.toString() == "print")
	{
		console.log(data);
		process.exit();
	}
	else
		data += chunk.toString("ascii");
	 console.log(chunk.toString());
});
