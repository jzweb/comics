var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var home = require('./controller/homeController');
var comic = require('./controller/ComicController');
app.use('/',home);
app.use('/',comic);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var server = app.listen(3000,function(){console.log("running at http//:localhost:3000")});