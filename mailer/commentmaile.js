const nodemailer = require('../config/nodemeller');
const comment = require('../controllers/comments_controller')

exports.newComment = (comment) => {
      let htmlString = nodemailer.renderTemplate({comment:comment}, '/comments/newcomment.ejs')
      
       nodemailer.transpoter.sendMail({
        from:'chatusteam@gmail.com',
        to:comment.user.email
      //   to:"shubhamjii2002@gmail.com"
        , 
        subject:"newcomment",
        html:htmlString
       },(err, info) => {
        if(err){console.log('error in sending mail', err);return;}

        console.log('message sent ', info);
        return;
       })
}