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
}


module.exports.destory = function(req,res){
        Comment.findById(req.params.id, function(err, comment){
            // .id means converting the object id into string
    
            if(comment.user == req.user.id){
                let postId = comment.post;
                comment.remove();

               Post.findByIdAndUpdate(postId, {$pull : {comment:req.params.id}}, function(err, post){
                return res.redirect('back');
               })
    
            }else{
                return res.redirect('back');
            }
        })
    }