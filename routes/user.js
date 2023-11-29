const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user_cont');


router.get('/profile', usercontroller.profile);
router.get('/signin', usercontroller.sign_in);
router.get('/signup', usercontroller.sign_up);
router.post('/create', usercontroller.create);


console.log(`router poaded ->>>>>>>>>>>`);

module.exports = router;