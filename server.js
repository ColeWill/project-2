var express = require('express');// we are acessing the express library
var app = express();//saving express in a var that we can use
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));//we use express to parse url query strings that come in as requests
app.use(bodyParser.json());// we use express to parse  json obect requests
 
 var db = require('./models'); // pull in my models
/************
 * DATABASE *
 ************/

/////serve up the hompage
app.get('/', function homepage(req,res){
	res.sendFile(__dirname + '/views/index.html');
});


app.use(express.static(__dirname + '/public'));//serve static files from the public folder that the user can see






/////INDEX ROUTE WORKING +++++++++++++++++++++++++++++
app.get('/api/quotes', function album_index(req,res){
	db.Quote.find({}, function (err,DBquotes){
		if (err){
			console.log(err);
		}
		res.json(DBquotes);
	});
});

/////
app.get('/api/quotes/:id', function albumFindOne(req,res){
		
		
		
	db.Quote.findOne({_id: req.params.id}, function(err, DBquotes){
		res.json(DBquotes);
	});
});


app.listen(3000, function(){
	console.log('3000 server is up on http://localhost:4000');
});