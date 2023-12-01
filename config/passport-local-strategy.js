const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
// authentication using paassport
passport.use(new LocalStrategy(
   {
    usernameField:'email'
   },
   function(email,password, done){
    // finding user and establish the identity
    User.findOne({email:email}, function(err, user){
        if(err){console.log(`error in finding user`); return done(err);}
        if(!user || user.password != password){console.log(`invalid user/password`); return done(null, false);}
        return done(null, user);
    });
     
   }


));

// serializing the user to decide which key is to be present in the cookise

passport.serializeUser(function(user, done){
   done(null, user.id);
});

// deserialzing the user from the key in the ccokis

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
       if(err){console.log(`error in finding user ----> paasport`); return done(err);}
       return done(null, user);
    });
});


// check if user is authenticated
passport.checkAuthentication = function (req, res, next){
     if(req.isAuthenticated()){
        return next();

     }
    //  if user is not signed in
    return res.redirect('/user/signin');

}

passport.setAuthenticatedUser = function(req, res, next){
           if(req.isAuthenticated()){
            // req. user contain the current signin cookies and we send in the locals for view
            res.locals.user = req.user;
           }
           next();
}
module.exports = passport;
