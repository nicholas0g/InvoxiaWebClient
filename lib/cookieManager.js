exports.getCookie=(req,res,next)=>{
    if(req.cookies.invoxia_auth) next();
    else res.render('login',{message:"Please log-in to use the service"});
  }
  
exports.setCoookie=(res,auth)=>{
    res.cookie('invoxia_auth',auth,{
      maxAge: 60*60*1000,
      secure: true,
      httpOnly: true,
      SameSite: 'Strict'
  });
  }
  
exports.deleteCookie=(res)=>{
    res.clearCookie('invoxia_auth');
  }