var express = require('express');

//CREATE OUR APP 

var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
	
	console.log('Express server is up on port 3000');
	
})