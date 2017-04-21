var express = require('express');// we are acessing the express library
var app = express();//saving express in a var that we can use
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));//we use express to parse url query strings that come in as requests
app.use(bodyParser.json());// we use express to parse  json obect requests
 
 var db = require('./models'); // pull in my models
/************
 * DATABASE *
 ************/
app.use(express.static('public'));




app.use(express.static(__dirname + '/public'));//serve static files from the public folder that the user can see

// ///serves up home page
// app.get('/', function homepage(req, res) {
//   res.sendFile(__dirname + '/views/index.html');
// });

// define a root route: localhost:3000/
app.get('/', function homepage (req, res) {
  res.sendfile(__dirname + '/views/index.html');
});


var apiKey= require('./env/api_env.js');

var start = 'http://google.com',
	next = '/images/';

	var url = start + next + apiKey;

console.log(apiKey);
console.log(url);



/////INDEX ROUTE WORKING +++++++++++++++++++++++++++++++
app.get('/api/quotes', function quotes_index(req,res){
	db.Quote.find({}, function (err,DBquotes){
		if (err){
			console.log(err);
		}
		res.json(DBquotes);
	});
});

///// findONE Route WORKING +++++++++++++++++++++++++++++++
app.get('/api/quotes/:id', function quotes_FindOne(req,res){
		
	db.Quote.findOne({_id: req.params.id}, function(err, DBquotes){
		res.json(DBquotes);
	});
});

//post a new Q //WORKING creates a new quote////////// working
app.post('/api/quotes', function postQ(req,res){
        //res.json("JSON req.body._id:   "+ req.body._id);
  var postQ = new db.Quote
    ({
    _id: req.body._id,
    quote: req.body.quote,
    author: req.body.author
      });
      
    postQ.save(function(err, q){
          res.json(q);
  });
  
});

///////////////// DELETE /////////////////////// Working
app.delete('/api/quotes/:id', function(req,res){
	var deleteID = req.params.id;
	db.Quote.findOneAndRemove({_id: deleteID}, function(err, cut){
		res.json(cut+" was taken out");
	});
});


app.listen(3000, function(){
	console.log('3000 server is up on http://localhost:3000');
});