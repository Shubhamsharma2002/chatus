module.exports.profile = function(req,res){
     return res.render('profile', {
          title: "||PROFILE||",
          
    });
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
//      return res.render('user_sign_up', {
//           title: "||Sign- Up page||",
          
//     });
}