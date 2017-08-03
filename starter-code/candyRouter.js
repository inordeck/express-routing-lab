/*
// Create an Express app from minimal starter code
// Use a local JS array of candy objects to mimic a database of candies
// This app will only respond to/with JSON; it is just an API, so don't worry about displaying HTML or files
// The resource Candy should be accessible via the endpoint /candies and be RESTful
// Implement index, show, create, update, and destroy functionality
*/

var express 		= require('express');
var app				= express();
var bodyParser 		= require('body-parser');
var candyRouter 	= express.Router();

// What would need to go into candies in order to pass our first test?
var candies = [
	{id:1, name: "dots", color: "red, orange, yellow, green"},
	{id:2, name: "skittles", color: "red, orange, yellow, green, purple"},
	{id:3, name: "jujubes", color: "red, orange, yellow, green, blue"},
	{id:4, name: "starbursts", color: "red, orange, yellow, pink"},
	{id:5, name: "mike and ikes", color: "red, orange, yellow, green, pink"},
	{id:6, name: "runts", color: "red, orange, yellow, green, purple"},
	{id:7, name: "jolly ranchers", color: "red, green, blue, purple, pink"},
	{id:8, name: "jelly beans", color: "red, orange, yellow, green, purple, pink, white, black"},
	{id:9, name: "nerds", color: "red, orange, yellow, green, purple, pink"},
];

// get all candies
candyRouter.get('/', function(req, res) {
	console.log("we've got lots of candy!");
	res.send(candies);
});

// Fill out the rest of the routes here
// Implement index, show, create, update, and destroy functionality


// get candy by id
candyRouter.get('/:id', function(req, res) {
	res.send(candies[req.params.id -1]);
	console.log("we've got this specific candy");
});


// post new candy
candyRouter.post('/', function(req, res) {
	candies.push(req.body);
	res.send(req.body);
});



// update a candy
candyRouter.put('/:id', function(req, res) {
	candies[req.params.id -1] = req.body;
	res.send(req.body);
});


// delete candy
candyRouter.delete('/:id', function(req, res) {
	candies.splice(req.params.id-1, 1);
	res.send({"message": "candy deleted"});
});


module.exports = candyRouter;