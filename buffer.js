
var str = new Buffer("A string of sorts","ascii");
str.write("buffer",2,6,"ascii");
console.log(str.toString());