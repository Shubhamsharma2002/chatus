const express = require('express');
const app = express();
const port = 8000;
// use exprees router
app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log(`eror in fired server : ${err}`);
    }
    console.log(`server fired sucessfully on port no: ${port}`);
})
