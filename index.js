const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err){
        console.log(`eror in fired server : ${err}`);
    }
    console.log(`server fired sucessfully on port no: ${port}`);
})
