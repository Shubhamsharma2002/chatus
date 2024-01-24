const Comment = require('../models/comment');
const Post = require('../models/post');
const commentmailer = require('../mailer/commentmaile');
const Like = require('../models/like');
module.exports.create = function(req, res){
    
    Post.findById(req.body.post, function(err, post){
            if(post){
             Comment.create({
                 content:req.body.content,
                 post: req.body.Post,
                 user: req.user._id,
              },function(err, comment){
                 //  handle error
                   post.comment.push(comment);
                   post.save();
                //    commentmailer.newComment(comment);
                    res.redirect('/');
                   
              });
            
            }
    });
}


// module.exports.create = async function(req, res){

//     try{
//         let post = await Post.findById(req.body.post);

//         if (post){
//             let comment = await Comment.create({
//                 content: req.body.content,
//                 post: req.body.post,
//                 user: req.user._id
//             });

//             post.comment.push(comment);
//             post.save();
            
//             comment =  comment.populate('user', 'name').execPopulate();
//             // commentmailer.newComment(comment);
//             // if (req.xhr){
              
    
//             //     return res.status(200).json({
//             //         data: {
//             //             comment: comment
//             //         },
//             //         message: "Post created!"
//             //     });
//             // }


//             req.flash('success', 'Comment published!');

//            return res.redirect('/');
//         }
//     }catch(err){
//         req.flash('error', err);
//         return;
//     }
    
// }


module.exports.destory = function(req,res){
        Comment.findById(req.params.id, function(err, comment){
            // .id means converting the object id into string
    
            if(comment.user == req.user.id){
                let postId = comment.post;
                comment.remove();
                 Like.deleteMany({likeable: comment._id, onModel: 'Comment'});
               Post.findByIdAndUpdate(postId, {$pull : {comment:req.params.id}}, function(err, post){
                return res.redirect('back');
               })
    
            }else{
                return res.redirect('back');
            }
        })
    }