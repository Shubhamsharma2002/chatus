 const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/chatus_dev');


 const db = mongoose.connection;
 db.on('error', console.error.bind(console, "error in coonecting to mongoodb"));

 db.once('open', function(){
           console.log("succesfully conected to db ->>>>>>>>>>> mongoodb");
 });


 module.exports = db;