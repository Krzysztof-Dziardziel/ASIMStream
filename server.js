var PORT = 9985; //Set port for the app
var fs = require("fs-extra");
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var https = require('https');
var credentials = {
    key: fs.readFileSync('./certs/privkey.pem', 'utf8'),
    cert: fs.readFileSync('./certs/cert.pem', 'utf8')
};
var server = https.createServer(credentials, app);
server.listen(PORT);
console.log("Webserver & socketserver running on port:" + PORT);