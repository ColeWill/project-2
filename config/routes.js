var express = require ('express');
var router = express.Router();
var bodyParser = require('body-parser');


var db = require('../models'); // CONNECT TO MONGOOSE !!! + pull in my models
//change ./models to ../models because up one level



// cannot move homepage route AND res.send'f'ile????
// router.get('/', function homepage (req, res) {
//   res.sendfile(path.join(__dirname, '../views', 'index.html'));
// });
// res.sendFile(path.join(__dirname, '../public', 'index1.html'));


/////XXXXXXXXXXXX +++++++++++++++++++++++++++++++
router.get('/api/quotes', function quotes_index(req,res){
	db.Quote.find({}, function (err,DBquotes){
		if (err){
			console.log(err);
		}
		res.json(DBquotes);
	});
});

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