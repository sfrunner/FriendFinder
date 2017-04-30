var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
app.use(express.static(path.join( __dirname,"app")));
console.log(__dirname);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
require("./app/routing/apiRoutes.js")(app,path);
require("./app/routing/htmlRoutes.js")(app,path);

app.listen(3080, "localhost");