// api app
var express = require('express');
var app = express();

var port = process.env.PORT || 3030;

var router = express.Router();


app.get('/', function(req, res) {
	res.send('API test');
});

app.listen(port, function() {
	console.log("API Server started on port " + port + "...");
});