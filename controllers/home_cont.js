const Post = require('../models/post');
// const PostImg = require('../models/postimg');
const User = require('../models/user');

module.exports.home = function(req,res){
    // console.log(req.cookies);
    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "||HOME||",
    //         posts : posts
    //   });
    // });
   Post.find({})
   .sort('-createdAt')
   .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            },
            populate: {
                path: 'likes'
            }
        }).populate('comments')
        .populate('likes')

   // this line display  the post which is store in database
   .exec(function(err, posts){
      
         User.find({}, function(err, users){

            return res.render('home', {
               title: "||HOME||",
               posts : posts,
               all_users : users
         }); 

         });

         
   });
}



