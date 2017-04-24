### Project-2

I started this project by building my backend first.  I built my server and routes and configured my database, and then a made a working prottype that could receive and display info that I wanted.

Next I built a fullstack app that had user authentication with passport.  

After that I incorporated all of passports and functionality into my full stack app.
## [My Api](https://theysaidso.com/api)
## [Link to Heroku](https://protected-springs-84894.herokuapp.com/)
## [Trello](https://trello.com/b/hpwPDMRY/project-2)
## [drawing1](http://i.imgur.com/nKXrjdu.jpg?1)
## [drawing 2](http://i.imgur.com/rOkzpHl.jpg)
## [prototype](http://i.imgur.com/pC9f82x.png)
## [wireframe1](http://i.imgur.com/aAySVF4.png)
## [wireframe2](http://i.imgur.com/0u3ugs8.png)


## My App

It is a random quote generator and saver.  Users can login, and get random Quotes from famous authors, politicians, and great minds with the click of a button. 

# Users Can...
-Get New Random Quotes
-See all quotes in the database displayed on the page
-Create their Own new quote and save it in the database
-Delete quotes from the DB


## Tech used

-HTML, CSS, jQuery
-AJAX
-Node.js
-MongoDB + Mongoose

This is a full stack app using MongoDB, Express, Node.js.  MongoDb stores the users email and encrypted passwords, as well as any qoutes they wish to presrve in the future.

Node.js runs all of the Javascript files on the backend, which allows me to create a server.  And access my third party API.

Passport allows user authentication (login/logout) functionality.


## Challenges

Passport is basically a fullstack app on its own.  It requires setting up a database, RESTful routes, connecting with mongoose, running JavaScript files with Node.js, and several Node packages unique to itself as well.  
	Integrating it into my working fullstack app was very difficult for me and took almost 10 hours to complete.
I still I need to spend more time deconstructiong it and getting more familiar with its ins and outs.  

Given the size of the project styling and page layout became a stretch goal.  I would have loved to make it look appealing and clean up the userinterface, but time was a severly limiting factor.


## The Fun Parts

Successfully connecting routes on the backend, linking up pages, installing and requiring the correct packages, troubleshooting broken connections, getting info from a 3rd party api and making it usable on the front end...
	Getting this app up and running was very rewarding for me.  I gained more insight on how the different elements on the backend interact with eachother to result in a fullstack app.  Getting something this complicated to work was very fun!



## Unsolved Problems

Saving session data, so that individual users have their own collection in the Database.  This would allow them to have a unique collection of qoutes. And only have access to their saved info.

Want to remove pink flash message bar from the top of the login page.

Need to redirect from a succesful login to the quote page.

## Stretch Goals

Pig Latin Filter - I want all the quotes to display in pglatin, by way of Javascript, and Users can have the filter on/off. For Humor...

Styling -- I think this could be an OK portfolio piece if it didn't look fugly...



