var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Kill = mongoose.model('Kill');

router.get('/', function(req, res, next){
	Kill.find().lean()
		.populate('killer', 'name').populate('victim', 'name')
		.exec(function(err, kills){
			console.log("Got here");
			if (err) {return next(err);}

			return res.json(kills);
		}
	);
});

router.get('/:num', function(req, res, next){
	return res.json([]);
});

module.exports = router;