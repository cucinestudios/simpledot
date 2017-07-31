const fs = require('fs');
const path = require('path');
const rootPath = path.resolve('./');
let data = fs.readFileSync(rootPath+'/.env', 'utf8');
let enviroment = "";
if (data) {
	var lines = data.split('\n');
	lines.forEach(function(line) { 
		if (line !== "") {
			if (line.indexOf('#')) {
				let array = line.split('=');
				let key = array[0];
				let value = array.slice(1).join('=');
				module.exports[key] = value;
			} 		 	
		} 
	});
}