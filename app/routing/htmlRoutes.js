var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/home', function(req, res){
	res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});