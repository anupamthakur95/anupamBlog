var express = require('express');
var router = express.Router();
var firebase =require("firebase");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Anupam Kumar Blog' });
});

module.exports = router;
