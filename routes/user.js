const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user_cont');


router.get('/profile', usercontroller.profile);

console.log(`router poaded ->>>>>>>>>>>`);

module.exports = router;