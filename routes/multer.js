const express = require('express');
const router = express.Router();
const controller = require('../controllers/postImgController')
const store = require('../config/multer');

// route.post('/uploadimg', store.single('imgpost'), controller.uploads )

router.post('/uploadimg', controller.create)
    module.exports = router;
