const Post = require('../models/post');
const Comment = require('../models/comment');
const mailer = require('../mailer/postmailer');

module.exports.create = function(req, res){
     let post =     Post.create({
            content:req.body.content,
            user: req.user._id
          },function(err, post){
            mailer.newpost(post);
            if(req.xhr){
                return res.status(200).json({
                    data:{
                        post:post
                    },
                    message:"post create--!!"
                });
            }
           
            
            req.flash('success', 'post published');
             if(err){req.flash('error', err); return;}
             return res.redirect('back');
         });
         
}

module.exports.destory = function(req,res){
    Post.findById(req.params.id, function(err, post){
        // .id means converting the object id into string

        if(post.user == req.user.id){
            post.remove();
            
            Comment.deleteMany({post : req.params.id}, function(err){
                return res.redirect('back');
            })
            if(req.xhr){
                  return res.status(200).json({
                    data:{
                        post_id:req.params.id
                    },
                    message:"post deleted"
                  });
            }
            req.flash('success', 'post deleted');
        }else{
            req.flash('error', err);
            return res.redirect('back');
        }
    })
}