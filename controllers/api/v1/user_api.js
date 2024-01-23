
// const User = require('../../../models/user');
// const jwt = require('jsonwebtoken');

// module.exports.createsesion = async function(req,res){

//     try {
//         let user = User.findOne({email:req.body.email});
//         if(!user || user.password != req.body.password){
//             return res.json(422, {
//                 message:"invalid username or password"
//             })
//         }

//         return res.json(200, {
//             message:'signin succesfully here is your tken plese kepp it safe',
//             data:{
//                 token:jwt.sign(user.toJSON(), 'chatus', {expiresIn:'10000'})
//             }
//         })
        
//     } catch (error) {
//           console.log('#### error ', err);
//           return res.json(500,{
//             message:"internal server Error"
//           });
//     }
       
//     }



const User = require('../../../models/user');
const jwt = require('jsonwebtoken');


module.exports.createSession = async function(req, res){

    try{
        let user = await User.findOne({email: req.body.email});

        if (!user || user.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password11111"
            });
        }

        return res.json(200, {
            message: 'Sign in successful, here is your token, please keep it safe!',
            data:  {
                token: jwt.sign(user.toJSON(), 'codeial', {expiresIn:  '100000'})
            }
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}