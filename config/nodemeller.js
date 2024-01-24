const nodemailer = require('nodemailer');
const path = require('path');
const ejs = require('ejs');
let transpoter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'chatusteam@gmail.com',
        pass:'ctgt uqnk wxfe yefp'
    }
});

let renderTemplate = (data, relativePath) =>{
    let mailHTML;
    ejs.renderFile(
             path.join(__dirname, '../views/mailer', relativePath),
             data,
             function(err, template){
                if(err){console.log('error in rendirng the template', err);return}

                mailHTML = template;
             }
    )

    return mailHTML;
}


module.exports = {
     transpoter : transpoter,
     renderTemplate:renderTemplate
}