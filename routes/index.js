const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/home_cont');

router.get('/', homecontroller.home);
router.use('/img', require('./multer'));
router.use('/user',require('./user'));
router.use('/posts', require('./post'));
router.use('/likes', require('./like'));
router.use('/comments', require('./comment'));

router.use('/api', require('./api'));
console.log(`router loaded`);

module.exports = router;