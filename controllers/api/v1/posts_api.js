const Post = require('../../../models/post')

module.exports.index = async function(req, res){

   let posts =  await Post.find({})
   .sort('-createdAt')
   .populate('user')
   .populate({
      // this is for display comments with user name
          path:'comment',
          populate:{
            path:'user'
          }
   })
    return res.json(200, {
        message:"list of posts",
        posts:posts
    })
}

module.exports.destory = async function(req, res){
  try{
    let post = await Post.findById(req.params.id);

    if (post.user == req.user.id){
        post.remove();

        await Comment.deleteMany({post: req.params.id});



        return res.json(200, {
            message: "Post and associated comments deleted successfully!"
        });
    }else{
       return res.json(401, {
        message:"you are not eligible to deleete this"
       })
    }

}catch(err){
    console.log('********', err);
    return res.json(500, {
        message: "Internal Server Error"
    });
}
}