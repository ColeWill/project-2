var express = require('express');
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');
var db = require('../models');
var qControllers = require('../controllers/qControllers.js');


function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();

  // Otherwise the request is always redirected to the home page
  res.redirect('/');
}


// homepage
router.route('/')
  .get(staticsController.home);

// router.route('/')
//   .get(usersController.getLogin);

////////////////////////////////////////////////// PASSPORT
router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route("/logout")
  .get(usersController.getLogout);

router.route("/secret")
  .get(authenticatedUser, usersController.secret);

///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> QUOTES

// TheySaidSo.com API -- Get a random quote
////////////////////////////////////////////
router.route('/api/quotes/getRandom')
  .get(qControllers.getRandom);


  // index -- get all//////////////////
 router.route('/api/quotes')
  .get(qControllers.quotes_index);

//WORKING creates a new quote  +++++++++++++++  working
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

// findOne
////////////////////////////////////////////////////
 router.route('/api/quotes/:id')
  .get(qControllers.quotes_FindOne);

// _+_+_+_+_+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+ Put/Patch //working
 router.put('/api/quotes/:id', function(req,res){
 
  var putID = req.params.id;
  
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
});

  //-------------- DELETE ----------------------- Working
router.route('/api/quotes/:id')
  .delete(qControllers.deleteQ);


// // index -- get all
//  router.route('/api/quotes')
//   .get(qControllers.quotes_index);



module.exports = router;