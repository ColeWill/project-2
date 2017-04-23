# project-2

#Timeline
4.20 1.45pm seed file is working and connecting to mongo db
##![Trello](https://trello.com/b/hpwPDMRY/project-2)
##![drawing1](http://i.imgur.com/nKXrjdu.jpg?1)
##![drawing 2](http://i.imgur.com/rOkzpHl.jpg)
##![wireframe1](http://i.imgur.com/aAySVF4.png)
##![wireframe2](http://i.imgur.com/0u3ugs8.png)
##![prototype](http://i.imgur.com/pC9f82x.png)

My App

It is a random quote generator and saver.  Users can login, and get random Quotes from famous authors, politicians, and great minds with the click of a button. 

After viewing users have the option to either save their qoute in a database, or continue generating new, random quotes.



Tech used

This is a full stack app using MongoDB, Express, Node.js.  

MongoDb stores the users email and encrypted passwords, as well as any qoutes they wish to presrve in the future.

Node.js runs all of the Javascript files on the backend, which allows me to create a server.  And access my third party API.

Express allows user authentication (login/logout) functionality.


Challenges

Passport is basically a fullstack app on its own.  It requires setting up a database, RESTful routes, connecting with mongoose, running JavaScript files with Node.js, and several Node packages unique to itself as well.  
	Integrating it into my working fullstack app was very difficult for me and took almost 10 hours to complete.
I still I need to spend more time deconstructiong it and getting more familiar with its ins and outs.  

The Fun Parts

Successfully connecting routes on the backend, linking up pages, installing and requiring the correct packages, troubleshooting broken connections, getting info from a 3rd party api and making it usable on the front end...
	Getting this app up and running was very rewarding for me.  I gained more insight on how the different elements on the backend interact with eachother to result in a fullstack app.  Getting something this complicated to work was very fun!



Unsolved Problems

Saving session data, so that individual users have their own collection in the Database.  This would allow them to have a unique collection of qoutes. 
