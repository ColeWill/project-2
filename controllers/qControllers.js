var db = require('../models'); // CONNECT TO MONGOOSE !!! + pull in my models
//change ./models to ../models because up one level



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
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

module.exports.homepage = homepage;
module.exports.quotes_index = quotes_index;