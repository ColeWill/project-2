var express = require ('express');
var router = express.Router();
var bodyParser = require('body-parser');


///require and connect to the controllers
var qControllers = require('../controllers/qControllers.js');

var apiKey= require('../env/api_env.js');

var request = require('request');
var db = require('../models');

// var rootDirectory = process.cwd();

// cannot move homepage route AND res.send'f'ile????
// router.get('/', function homepage (req, res) {
//   res.sendfile(path.join(__dirname, '../views', 'index.html'));
// });
// res.sendFile(path.join(__dirname, '../public', 'index1.html'));


///XXXXXXXXXXXX +++++++++++++++++++++++++++++++
// router.get('/api/quotes', function quotes_index(req,res){
// 	db.Quote.find({}, function (err,DBquotes){
// 		if (err){
// 			console.log(err);
// 		}
// 		res.json(DBquotes);
// 	});
// });
// router.get('/', function homepage (req, res) {
// 	// prcess.cwd() gives me the root and add the 
//   res.sendfile(process.cwd()+'/views/index.html');
// });
router.route('/')
	.get(qControllers.homepage);

 router.route('/api/quotes')
 	.get(qControllers.quotes_index);

////////////////////////////////////////////

// i request with node instead of ajax calling on front end
//cause i can use my apiKey
 router.get('/api/quotes/getRandom', function getRandom(req, res){
 	request('https://quotes.rest/quote/random.json?api_key='+apiKey, function(err, response, body){
 		///this send stuff to the front end...
 		res.json(body);

 	});
 });
 ////////////////////////////////////////////////////
 

// 	router.get('/api/quotes', function quotes_index(req,res){
// 	db.Quote.find({}, function (err,DBquotes){
// 		if (err){
// 			console.log(err);
// 		}
// 		res.json(DBquotes);
// 	});
// });

///// findONE Route WORKING +++++++++++++++++++++++++++++++
router.get('/api/quotes/:id', function quotes_FindOne(req,res){
		
	db.Quote.findOne({_id: req.params.id}, function(err, DBquotes){
		res.json(DBquotes);
	});
});
///// +++++++++++++++++++++++++++++++++++++++++++++++++++

//post a new Q //WORKING creates a new quote////////// working
router.post('/api/quotes', function postQ(req,res){
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
////////////////////////////////////////////////////////

///////////////// DELETE /////////////////////// Working
router.delete('/api/quotes/:id', function(req,res){
	var deleteID = req.params.id;
	db.Quote.findOneAndRemove({_id: deleteID}, function(err, cut){
		res.json(cut+" was taken out");
	});
});



module.exports = router;