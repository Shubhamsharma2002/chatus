const Post = require('../models/post');
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
      // this is for display comments with user name
          path:'comment',
          populate:{
            path:'user'
          }
   })

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


