
const mongoose = require('mongoose');
const multer = require('multer');

const path = require('path');
const img_PATH = path.join('/uploads/users/postsimg');
const ImgSchema = new mongoose.Schema({
    imgpost: {
        type:String
       
    }
    // ,desc:{
    //      type:String
    // }
},{
    timestamps:true
});
let  storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..', img_PATH));
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + Date.now());
    }
  })

ImgSchema.statics.uploadImng = multer({storage:storage}).single('imgpost')
ImgSchema.statics.imgPath = img_PATH;


const IMGPOST = mongoose.model('IMGPOST', ImgSchema);

module.exports = IMGPOST;