var express = require ('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../models');

///require and connect to the controllers
var qControllers = require('../controllers/qControllers.js');

// var apiKey= require('../env/api_env.js');

// var request = require('request');
// var db = require('../models');

// var rootDirectory = process.cwd();

// cannot move homepage route AND res.send'f'ile????
// router.get('/', function homepage (req, res) {
//   res.sendfile(path.join(__dirname, '../views', 'index.html'));
// });
// res.sendFile(path.join(__dirname, '../public', 'index1.html'));




// homepage
router.route('/')
	.get(qControllers.homepage);


// index -- get all
 router.route('/api/quotes')
 	.get(qControllers.quotes_index);


// TheySaidSo.com API
////////////////////////////////////////////

router.route('/api/quotes/getRandom')
	.get(qControllers.getRandom);

// findOne
////////////////////////////////////////////////////
 router.route('/api/quotes/:id')
	.get(qControllers.quotes_FindOne);
	
 

///// +++++++++++++++++++++++++++++++++++++++++++++++++++

 //WORKING creates a new quote////////// working
router.post('/api/quotes', function postQ(req,res){
        res.json("JSON req.body._id:   "+ req.body._id);
  var postQ = new db.Quote
    ({
    
    quote: req.body.quote,
    author: req.body.author
      });
      
    postQ.save(function(err, q){
          res.json(q);
  });
});


////////////////////////////////////////////////////////

///////////////// DELETE /////////////////////// Working
router.route('/api/quotes/:id')
	.delete(qControllers.deleteQ);



module.exports = router;