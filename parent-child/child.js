var num = process.argv[2];
console.log("Child process "+num+" started.");
process.on('exit',function(){
	console.log("Process "+num+" ended.");
});