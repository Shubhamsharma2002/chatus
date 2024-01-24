const Imp = require('../models/imgpost');
const path= require('path');
const fs = require('fs');
const multer = require('multer')
// const postmailer = require('../mailer/commentmaile')

module.exports.create = async function(req, res){
    
    let img =     Imp.create({
        imgpost:req.body.imgpost,
        user: req.user._id
      },function(err, img){
        // console.log(img)
        if(req.file){
            return res.status(200).json({
                // data:{
                //     img:img
                // },
                message:"post create--!!"
                
            });
            
            
        }
        req.flash('success', 'post published');
       
         if(err){req.flash('error', err); return;}
         return res.redirect('back');
     });
}



