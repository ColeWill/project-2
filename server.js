var express = require('express');// we are acessing the express library
var app = express();//saving express in a var that we can use
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));//we use express to parse url query strings that come in as requests
app.use(bodyParser.json());// we use express to parse  json obect requests

app.use(bodyParser.json());
app.use(express.static('public'));

/************
 * DATABASE *
 ************/
 require('dotenv').config();




app.use(express.static(__dirname + '/public'));//serve static files from the public folder that the user can see

// ///serves up home page
// app.get('/', function homepage(req, res) {
//   res.sendFile(__dirname + '/views/index.html');
// });

// define a root route: localhost:3000/
app.get('/', function homepage (req, res) {
  res.sendfile(__dirname + '/views/index.html');
});


// var apiKey= require('./env/api_env.js');

// var start = 'http://google.com',
// 	next = '/images/';

// 	var url = start + next + apiKey;


//require routes here move routes out
// ........................................Routes
var routes = require ('./config/routes');
app.use(routes);
// ........................................Routes









app.listen(3000, function(){
	console.log('3000 server is up on http://localhost:3000');
});