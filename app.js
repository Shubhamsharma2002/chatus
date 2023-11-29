const express = require('express');
const app = express();
const port = 8000;
const  expresslayouts = require('express-ejs-layouts');
app.use(express.static('./assets'));
app.use(expresslayouts);
// extract style and script tage
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use exprees router
app.use('/', require('./routes'));
// using view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(port, function(err){
    if(err){
        console.log(`eror in fired server : ${err}`);
    }
    console.log(`server fired sucessfully on port no: ${port}`);
})
