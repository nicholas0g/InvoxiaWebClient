var express = require('express');
var router = express.Router();

var invoxiaClient=require('../lib/invoxiaClient');
var cookieManager=require('../lib/cookieManager');


/* GET home page. */
router.get('/',cookieManager.getCookie, function(req, res, next) {
  invoxiaClient.getDeviceList(req.cookies.invoxia_auth,function(status,data){
    if(status) res.render('devicelist',{devices:data});
    else res.render('login',{message:"Wrong credentials or session expired"});
  })
});
/* POST login page. */
router.post('/login',function(req,res,next){
  let buffer=new Buffer.from(req.body.email+":"+req.body.password);
  cookieManager.setCoookie(res,buffer.toString('base64'));
  res.redirect('/')
})
/* GET login page. */
router.get('/login',function(req,res,next){
  res.render('login');
})
/* GET logout page. */
router.get('/logout',function(req,res,next){
  cookieManager.deleteCookie(res);
  res.redirect('/');
})
/* GET map page. */
router.get('/history/:id',cookieManager.getCookie,function(req,res,next){
  invoxiaClient.getDeviceHistory(req.cookies.invoxia_auth,req.params.id,function(status,data){
    invoxiaClient.getDeviceInfo(req.cookies.invoxia_auth,req.params.id,function(status,device){
      if(status) res.render('map',{positions:data,device:device});
      else res.render('login',{message:"Wrong credentials or session expired"});
    })
  })
})


module.exports = router;
