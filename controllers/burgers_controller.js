var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req, res) {

	burgers.all(function(data){

		res.render("index",{burger:data});
	})
});

module.exports = router;