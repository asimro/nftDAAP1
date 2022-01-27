
var fs = require('fs');
var jsonFile = "./contractabi.json";
var parsed = JSON.parse(fs.readFileSync(jsonFile));
var abi = parsed.abi;

module.exports = abi;

