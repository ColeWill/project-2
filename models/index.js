var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/quotes");//declares connection to mongo db and name of collection...

module.exports.Quote = require('./quote.js');