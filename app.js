const express = require('express');
const cookieparser = require('cookie-parser');
const app = express();
const port = 8000;
const  expresslayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookies
const session = require('express-session');
const paasport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const parportJwt = require('./config/passport-jwt-strategy');
const googlepassport = require('./config/passport-google-auth');
const MongoStore = require('connect-mongo');
const SaasMiddleware = require('node-sass-middleware');
const flash = require('connect-flash');
const Cmidware = require('./config/midleware');
const multer = require('multer');
app.use(SaasMiddleware({
       src:'./assets/scss',
       dest: './assets/css',
       debug:false,
       outputStyle:'expanded',
       prefix:'/css'
}));

app.use(express.urlencoded());
app.use(cookieparser());
app.use(express.static('./assets'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(expresslayouts);
// extract style and script tage
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// using view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name:'Chatus',
    secret:'bla-bla-bla',
    saveUninitialized:  false,
    resave : false,
    cookie:{
        maxAge:(1000 *60 * 100)
    }  ,
    store:  MongoStore.create({
        
        mongoUrl:"mongodb://localhost:27017/chatus_dev",
            autoRemove:'disabled'
        
    },
    function(err){
        console.log(err || 'connect mongo is ok');
    }
    )
}));
app.use(paasport.initialize());
app.use(paasport.session());
app.use(paasport.setAuthenticatedUser);
app.use(flash());
app.use(Cmidware.setflash);

app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log(`eror in fired server : ${err}`);
    }
    console.log(`server fired sucessfully on port no: ${port}`);
})
