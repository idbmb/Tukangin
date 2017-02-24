var express = require('express');
var router = express.Router();
const Model = require('../../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  Model.Profile_tukang.findAll().then(function(tukangs){
    res.render('tukang/index',{tukangs : tukangs})
  })
});

module.exports = router;
