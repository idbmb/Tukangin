var express = require('express');
var router = express.Router();
const Model = require('../../models')

/* GET home page. */
router.get('/list/:id', function(req, res, next) {
  Model.Profile_tukang.findAll({include:[Model.Skill_tukang],where:{SkillTukangId : req.params.id}}).then(function(tukangs){
    res.render('tukang/list',{tukangs : tukangs})
  })
});

router.get('/hire/:id', function(req, res, next) {
  Model.Profile_tukang.findById(req.params.id).then(function(tukang){
    // Still use dummy data user, login not ready yet
    Model.User.findById(req.params.id).then(function(user){
      res.render('tukang/hire_tukang',{tukang : tukang, user: user})
    })
  })
})

router.post('/order', function(req, res, next) {
  Model.Order.create(
    { UserId : req.body.userid,
      Profile_tukangId : req.body.tukangid,
      description : req.body.description,
      status : 0
    }).then(function(){
      res.redirect('dashboard')
    })
})

router.get('/delete/:id', function(req, res, next) {
  Model.Order.destroy({where:{id : req.params.id}}).then(function(){
    res.redirect('/tukangs/dashboard')
  })
})

router.get('/edit/:id', function(req, res, next) {
  Model.Order.findById(req.params.id).then(function(order){
    res.render('tukang/order_edit.ejs', {order : order})
  })
})

router.get('/status', function(req, res, next) {
  res.render('tukang/status')
})

router.get('/dashboard', function(req, res, next){
  Model.Order.findAll({where:{UserId : 1}}).then(function(orders) {
    res.render('tukang/dashboard', {orders : orders})
  })
})

module.exports = router;
