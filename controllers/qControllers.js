var db = require('../models'); // CONNECT TO MONGOOSE !!! + pull in my models
//change ./models to ../models because up one level

function quotes_index(req,res){
	db.Quote.find({}, function (err,DBquotes){
		if (err){
			console.log(err);
		}
		res.json(DBquotes);
	});
}

module.exports.quotes_index = quotes_index;