var express = require('express');
var router = express.Router();
const Model = require('../../models')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  Model.Profile_tukang.findAll({include:[Model.Skill_tukang],where:{SkillTukangId : req.params.id}}).then(function(tukangs){
    res.render('tukang/index',{tukangs : tukangs})
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
  
})

module.exports = router;
