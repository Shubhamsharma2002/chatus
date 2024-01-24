const nodemailer = require('../config/nodemeller');
const post = require('../controllers/postcontroller')

exports.newpost = (post) => {
    //   let htmlString = nodemailer.renderTemplate({comment:comment}, '/comments/newcomment.ejs')
      
       nodemailer.transpoter.sendMail({
        from:'chatusteam@gmail.com',
        to:post.user.email
      //   to:"shubhamjii2002@gmail.com"
        , 
        subject:"newpost",
        html:"<p>post got published</p>"
       },(err, info) => {
        if(err){console.log('error in sending mail', err);return;}

        console.log('message sent ', info);
        return;
       })
}