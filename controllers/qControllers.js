var db = require('../models'); // CONNECT TO MONGOOSE !!! + pull in my models
//change ./models to ../models because up one level
// var apiKey = require('dotenv').config();
var apiKey= process.env.APIKEY;
var request = require('request');
var bodyParser = require('body-parser');


// homepage
//----------------------------------------------------
function homepage (req, res) {
	// prcess.cwd() gives me the root directory to add to the file path
  res.sendfile(process.cwd()+'/views/index.html');
}

// index
//======================================================
function quotes_index(req,res){
	db.Quote.find({}, function (err,DBquotes){
		if (err){
			console.log(err);
		}
		res.json(DBquotes);
	});
}

 function putQ(req,res){

  var putID = req.params.id;
  res.json(putID);
  db.Quote.findOne({_id: putID}, function(err, quote){
     
      quote._id = req.body._id;
      quote.author = req.body.author;
      quote.quote = req.body.quote;

      quote.save(function(err, saveQ){
        if (err){
          res.json("err");
        }
        res.json(saveQ);
      });
  });
}

// get Random Quote From the API
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// i request with node instead of ajax calling on front end
//cause i can use my apiKey
function getRandom(req, res){
console.log('this route has been hit');//working...
 	request('https://quotes.rest/quote/random.json?api_key='+apiKey, function(err, response, body){
 		///this send stuff to the front end...
 		var parsedQ  = JSON.parse(body);
 		
		var apiObject = {
 			quote: parsedQ.contents.quote,
 			author: parsedQ.contents.author
 		};

 		res.send(apiObject);
 		
 	});

}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function quotes_FindOne(req,res){
		
	db.Quote.findOne({_id: req.params.id}, function(err, DBquotes){
		console.log(DBquotes);
		res.json(DBquotes);
	});
}


function deleteQ(req,res){
	var deleteID = req.params.id;
	db.Quote.findOneAndRemove({_id: deleteID}, function(err, cut){
		res.json(cut+" was taken out");
	});
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function postedQ(req,res){
	
    // res.json("JSON req.body._id:   "+ req.body._id);
  	var postQ = new db.Quote
    ({
    
    quote: req.body.quote,
    author: req.body.author
      });
      
    postQ.save(function(err, q){
          res.json(q);
  });
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
module.exports.postedQ = postedQ;
module.exports.putQ  = putQ;
// module.exports.homepage = homepage;

module.exports.deleteQ = deleteQ;
module.exports.quotes_FindOne = quotes_FindOne;
module.exports.quotes_index = quotes_index;
module.exports.getRandom = getRandom;