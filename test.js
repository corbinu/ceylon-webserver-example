var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
var Hapi = require('hapi');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 8000);

// Define the route
var hello = function (request) {
	request.reply('Hello Word!');
};
var helloRoute = {
	method: 'GET',
	path: '/hello',
	config: {
		cache: { expiresIn: 5000 },
		handler: hello
	}
};
// Add the route
server.route(helloRoute);

// Start the server
server.start();

console.log("Listening on port 3000");