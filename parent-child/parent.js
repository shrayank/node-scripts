var child_process = require("child_process");

for(var i=0;i<3;i++){
	// var child = child_process.exec("node child.js "+i,function(err,stdout){
	// 	if(err)
	// 		console.log(err);
	// 	else
	// 		console.log(stdout);
	// });

	var child = child_process.spawn("node",['child.js',i]);
	child.stdout.on('data',function(stdout){
		console.log(stdout.toString());
	})

};

