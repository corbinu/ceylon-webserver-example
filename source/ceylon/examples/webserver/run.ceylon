"Run the module `ceylon.examples.webserver`."

shared void run() {
	dynamic { 
		value hapi = require("hapi");

		// Create a server with a host and port
		value server = hapi.createServer("localhost", 3000);

		value hello = void (value request) {
			request.reply("Hello Word!");
		};

		// Add the route
		value helloRoute = value {
		    method: "GET",
		    path: "/hello",
		    handler: hello
		};
		server.route(helloRoute);

		// Start the server
		server.start();
	}

	print("Listening on port 3000");
}