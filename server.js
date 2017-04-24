require('dotenv').config();

var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

console.log(process.env.APIKEY);

module.exports.Quote = require('./models/quote.js');

//mongoose.connect('mongodb://localhost/quotes-login'); 


app.use(bodyParser.urlencoded({extended:true}));//we use express to parse url query strings that come in as requests
app.use(bodyParser.json());// we use express to parse  json obect requests

app.use(bodyParser.json());

////////////////////////  Passport
app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser()); 

// serve up views
///////////////////////////
app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 


//require passport into project
require('./config/passport')(passport);
  
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//require routes here move routes out
// .................................................................Routes
var routes = require ('./config/routes');
app.use(routes);
// .................................................................Routes

app.listen(process.env.PORT || 3000);
	
	console.log('3000 Passport + P-2 on http://localhost:3000');
