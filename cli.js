#! /usr/bin/env node

var program = require('commander');
var chalk = require('chalk');
var error = chalk.red;
var hipster = require('./index.js');
var fs = require('fs');

program
	.version('0.0.1')
	.usage('<inputfile> <outputfile>')
	.parse(process.argv);

if (!program.args.length) {
	program.help();
}
else if (program.args.length == 1) {
	fs.readFile(program.args[0], function(err, data) {
	    if (err) {
	        return console.log(error("O_o  Error reading the input file"));
	    }
	    else {
			hipster.compile( data, function(result) {
				console.log(result.css);
			});
		}
	});
}
else if (program.args.length == 2) {
	fs.readFile(program.args[0], function(err, data) {
	    if (err) {
	        return console.log(error("O_o  Error reading the input file"));
	    }
	    else {
			hipster.compile( data, function(result) {
				fs.writeFile(program.args[1], result.css, function(err) {
					if (err) {
				        return console.log(error("O_o  Error writing to the output file"));
				    }
				});
			});
		}
	});
}
else {
	console.log(error("O_o  Where are you off to with all those arguments?!"));
}