// api app
var express = require('express'),
	bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var router = express.Router();

// build routers for each pathway if enough functionality exists
// app.use routers applying the router to the path route in the app.use call
router.route('/users')
	.get(function(req, res) {
		var response = [
			{ email: "p.thelusma@aol.com", username: "pthelusma", hash: "kjfd3rd-#j8d83hf83h"}, 
			{ email: "a.vanetveldt@aol.com", username: "avan", hash: "kjdf8#hhsdfef324-f83h"}, 
			{ email: "j.costanza@aol.com", username: "jbaldanza", hash: "kjdf8djdfsd358d83hf83h"}, 
		];
		res.json(response);
	});

router.route('/photos')
	.get(function(req, res) {
		var response = [
			{ id: "p000001", datablob: "ASDFJEIJ32984J293FJASNDF9832NFLKASNCV#DIFJ8JFA9WJF9A8JEFJ" },
			{ id: "p000002", datablob: "JASDOFPASDFM0342MSDFA0W9VUR03289VUAP98Y3VRPA8W3RVA#DIFJ8JFA9WJF9A8JEFJ" },
			{ id: "p000003", datablob: "SDF0A98WURVA8W3RVU43IAUBNJS8YFPAV39B8RVYAPWB8RYBAW38BR6NAPW8RAWNP3V" }
		];
		res.json(response);
	})
	.post(function(req, res) {
		var photo = { id: Date.now(), datablob: req.body.blob }
		console.log(photo);
		res.send(photo);
	});

app.use('/api', router);


app.get('/', function(req, res) {
	res.send('API test');
});

app.listen(port, function() {
	console.log("API Server started on port " + port + "...");
});