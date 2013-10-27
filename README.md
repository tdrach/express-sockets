Express - Socket IO
===============

## Make API calls using Socket IO and Express for Node JS

I wanted to see how it may work to use Socket.io instead of using jQuery/AJAX requests to an Api.

### Run it

Assuming you have Node and NPM installed
	
	npm install

I would install nodemon globally
	
	sudo npm install -g nodemon

Then run
	
	nodemon app.js

### Usage

This example uses an internal api

	/api/posts

You could easily modify it to use any external Api
	
	'/sockets/ApiSockets.js'
	var api = new Api('v1.0.1', 'http://twitter.com/api/')

Listen for an emitter from the client

	'app.js'
	socket.on('get.posts')

You can make a GET request to that Api

	'app.js'
	api.Get(urlPath, socket, clientEmitter)

On the client side, any event can trigger a GET request (or whatever if you modify it)

	$(".class").click(function(){
		socket.emit('get.posts', { action: 'clicked .class' });
	});


