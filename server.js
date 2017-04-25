var express = require("express");
var parser = require("body-parser");

var path = require("path");
exports.path = path;

var app = express();
exports.app = app;

app.listen(3080, "localhost");