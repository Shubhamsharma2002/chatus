const mongoose = require('mongoose');
const User = require('./user');


const commentSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
  
  // , likes : [
  //   {
  //     type:mongoose.Schema.Types.ObjectId,
  //     ref:'Like'
  //   }
  // ]

},{
    timestamps:true
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;