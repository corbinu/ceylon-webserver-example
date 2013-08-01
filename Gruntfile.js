/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		exec: {
			build: {
				command: '$CEYLON_HOME/bin/ceylon compile-js --out=./node_modules ceylon.examples.webserver'
			}
		}
	});

	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['exec:build']);

};
