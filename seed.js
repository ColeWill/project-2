var db = require('./models');

var quotesArray = [];

quotesArray.push({
             	_id: 1,
              quote: 'this is an inspirational quote',
              author: 'cole'
              
            });
quotesArray.push({
              _id: 2,
              quote: 'the next best quote by me',
              author: 'cw'
              
            });
quotesArray.push({
             _id: 3,
              quote: 'i wish i had more direction on this project',
              author: 'cwill'
              
            });
quotesArray.push({
              _id: 4,
              quote: 'it might rain today...',
              author: 'the news'
              
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
