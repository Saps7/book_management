# book_management
 This is a book managemnt RESTful API built using NodeJS with Express server and MongoDB Database.
### Steps to run this code locally:
* Fork this repo or download the code locally
* Use ```npm install``` to install all dependencies.
* Add a ```.env``` file to store the mongoDB url as MONGO_URI.
* Use ```node app.js``` to start the app.

### API routes in this App
* /api/book/create : POST route to add a new book
* /api/book/delete/:id : DELETE route to delete a specific book 
* /api/book/update/:id : PUT route to update a specific book
* /api/book/get/:id : GET route to fetch a specific book
* /api/book/get : GET route to fetch all books

### Assumptions
* I have only built the backend NodeJS API and not any frontend, based on your requirements.

 ##### You can call the API routes from the deployed link: https://witty-fly-garb.cyclic.app. 
