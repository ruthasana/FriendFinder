var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');

var data = require('../data/friends.js');

router.use(bodyParser.json());

router.get('/friends/all',function(req, res){
    // sends back data variable
	res.json(data);
});

router.post("/survey/new", function(req, res){
	// parse info received from request into new object
    // push object to data
	var body = JSON.parse(req.body);
	res.json(body.name);
});

module.exports = router;