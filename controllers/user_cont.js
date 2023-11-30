const User = require('../models/user');
module.exports.profile = function(req,res){
    if(req.cookies.user_id){
     User.findById(req.cookies.user_id, function(err, user){
          if(user){
               return res.render('profile', {
                    title: "||PROFILE||",
                    user:user
              });
          }
          return res.redirect('/user/signin');
     })
    }else{
     return res.redirect('/user/signin');
    }

}
// sign in into the page
module.exports.sign_in = function(req,res){
     return res.render('user_sign_in', {
          title: "||Sign-In page||",
          
    });
}
// sign up into the page
module.exports.sign_up = function(req,res){
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
      User.findOne({email:req.body.email}, function(err,user){
          if(err){ console.log( `Error in finding user in Signing in`);  return; }

          if(user){
                     if(user.password != req.body.password){ 
                         return res.redirect('back');
                    }
                    res.cookie('user_id', user.id);
                    return res.redirect('/user/profile');

          }else{

          }
      });
     }