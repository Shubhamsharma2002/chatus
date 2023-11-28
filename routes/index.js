const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/home_cont');

router.get('/', homecontroller.home);
router.use('/user',require('./user'));
console.log(`router loaded`);

module.exports = router;