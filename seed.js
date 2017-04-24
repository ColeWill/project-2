var db = require('./models');

var quotesArray = [];

quotesArray.push({
             	
              quote: 'Pain is simply information entering the Body...',
              author: 'Jerry Seinfeld'
              
            });
quotesArray.push({
              
              quote: 'Y.O.L.O.',
              author: 'Unknown'
              
            });
quotesArray.push({
             
              quote: "Don't Quote me on this...",
              author: 'Unknown'
              
            });


	db.Quote.remove({}, function(err,albums){
		if(err){
			console.log('seed.js db.quote.remvove', err);
		}
		console.log('removed all quotes from mongo db');
		db.Quote.create(quotesArray, function(err, albums){
			if(err){
				return console.log('seed.js db.Quote.create', err);
			}
			console.log('added '+quotesArray.length+" to mongoDB");
			process.exit();
		});
	});