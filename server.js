var express = require('express'),
    exphbs = require('express-handlebars'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    mysql = require('mysql');


var app = express();

var PORT = process.env.PORT || 7777;

app.use(express.static(__dirname + "/public"))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use(bodyParser.text({ type: 'text/html' }))

require("./controllers/burgers_controller.js")(app)

app.listen(PORT, function(){

	console.log("Listening on" + PORT);
	
})