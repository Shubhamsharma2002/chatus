const User = require('../models/user');
module.exports.profile = function(req,res){
     return res.render('profile', {
          title: "||PROFILE||",
          
    });
}
// sign in into the page
module.exports.sign_in = function(req,res){
     if(req.isAuthenticated()){
          return res.redirect('/user/profile');
         }
     return res.render('user_sign_in', {
          title: "||Sign-In page||",
          
    });
}
// sign up into the page
module.exports.sign_up = function(req,res){
     if(req.isAuthenticated()){
      return res.redirect('/user/profile');
     }
     return res.render('user_sign_up', {
          title: "||Sign- Up page||",
          
    });
}
//get the sign up data
module.exports.create = function(req,res){
  if(req.body.password != req.body.cnf_password){
     return res.redirect('back');
  }
  User.findOne({email : req.body.email}, function(err,user){
              if(err){ console.log( `Error in finding user in Signing Up`);  return; }
              if(!user){
                       User.create(req.body, function(err, user){
                         if(err){ console.log( `Error in creating  user while Signing Up`);  return; }


                         return res.redirect('/user/signin');
                       });
              }else{
               return res.redirect('back');
              }
  });
  
}



// for sin in

module.exports.createsesion = function(req,res){
     return res.redirect('/');
     }

     module.exports.destroySession = function(req, res){
          req.logout(function(err) {
               if (err) { return next(err); }
               res.redirect('/');
             });
     }