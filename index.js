var postcss = require('postcss');
var calc = require('postcss-calc');
var imports = require('postcss-import');
var mixins = require('postcss-sassy-mixins');
var nested = require('postcss-nested');
var variables = require('postcss-simple-vars');

var hipster = {}

// Defining CSS Processor
var hipsterProcessor = postcss()
	.use(calc)
	.use(imports)
	.use(mixins)
	.use(nested)
	.use(variables);

// Compiling hipster css to css
hipster.compile = function(data, callback){
	hipsterProcessor.process(data).then(function(result) {
		callback(result);
	});
}

module.exports = hipster;
