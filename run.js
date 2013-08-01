
ceylonRun = function(module, version) {
	var ceylon;
	if (module != 'default')
	{
		ceylon = require(module.split('.').join('/') + '/' + version + '/' + module + '-' + version);
	}
	else
	{
		ceylon = require('default/default');
	}
	ceylon.run();
};

ceylonRun('ceylon.examples.webserver', '1.0.0');