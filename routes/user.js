const express = require('express');
const router = express.Router();
const paasport = require('passport');
const usercontroller = require('../controllers/user_cont');


router.get('/profile', paasport.checkAuthentication, usercontroller.profile);
router.get('/signin', usercontroller.sign_in);
router.get('/signup', usercontroller.sign_up);
router.post('/create', usercontroller.create);
// use passport as a middle ware
router.post('/create-sesion', paasport.authenticate(
    'local',
    {failureRedirect:'/user/signin'},
), usercontroller.createsesion);

router.get('/signout', usercontroller.destroySession);
console.log(`router poaded ->>>>>>>>>>>`);

module.exports = router;