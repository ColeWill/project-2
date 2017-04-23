var mongoose = require('mongoose');


// ONLY NEED TO CONNECT TO MONGOOSE ONCE ??? 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/quotes");//declares connection to mongo db and name of collection...

module.exports.Quote = require('./quote.js');
module.exports.User = require('./quote.js');