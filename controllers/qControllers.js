var db = require('../models'); // CONNECT TO MONGOOSE !!! + pull in my models
//change ./models to ../models because up one level

var apiKey= require('../env/api_env.js');

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


// get Random Quote From the API
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// i request with node instead of ajax calling on front end
//cause i can use my apiKey
function getRandom(req, res){
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

// function postQ(req,res){
// 	res.json("before?");
//         //res.json("JSON req.body._id:   "+ req.body._id);
//   var postQ = new db.Quote
//     ({
//     _id: req.body._id,
//     quote: req.body.quote,
//     author: req.body.author
//       });
      
//     postQ.save(function(err, q){
//           res.json(q);
//   });
// }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//module.exports.deleteQ = deleteQ;
// module.exports.postQ = postQ;

module.exports.homepage = homepage;
module.exports.quotes_index = quotes_index;
module.exports.getRandom = getRandom;