const passport = require('passport');
const googleAuth = require('passport-google-oauth').OAuth2Strategy;


const crypto = require('crypto');

const User = require('../models/user');


passport.use(new googleAuth({
    clientID : "124003436727-fl7odlqmnj8lscf60pikod6cmf1313gk.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL: "http://localhost:8000/user/auth/google/callback"
}, 
  function(accessToken , refershToken, profile, done){
    User.findOne({email:profile.emails[0].value}).exec(function(err, user){
        if(err){console.log('error is goole auth',err); return; }
        if(user){
            return done(null, user);
        }else{
                User.create({
                     name:profile.displayName,
                     email:profile.emails[0].value,
                     password:crypto.randomBytes(20).toString('hex')
                },function(err, user){
                    if(err){console.log('error is goole auth',err); return; }

                    return done(null, user);
                })
        }
    })
  }

));

module.exports = passport;


// {"web":{"client_id":"124003436727-fl7odlqmnj8lscf60pikod6cmf1313gk.apps.googleusercontent.com","project_id":"chatus-412110","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["http://127.0.0.1:8000/user/auth/google/callback"],"javascript_origins":["http://127.0.0.1:8000"]}}