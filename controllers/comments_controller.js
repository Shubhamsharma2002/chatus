const Comment = require('../models/comment');
const Post = require('../models/post');
module.exports.create = function(req, res){
       Post.findById(req.body.post, function(err, post){
               if(post){
                Comment.create({
                    content:req.body.content,
                    post: req.body.Post,
                    user: req.user._id
                 },function(err, comment){
                    //  handle error
                      post.comment.push(comment);
                      post.save();
                       res.redirect('/');
                      
                 });
               }
       });




        //  Comment.create({
        //     content:req.body.content,
        //     user: req.user._id
        //  },function(err, post){
        //      if(err){console.log(`Error in creating a post`); return;}
        //      return res.redirect('back');
        //  });
}