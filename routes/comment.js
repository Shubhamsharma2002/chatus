const express = require('express');
const router = express.Router();
const paasport = require('passport');
const commentController = require('../controllers/comments_controller');

router.post('/create',paasport.checkAuthentication, commentController.create);
router.get('/destory/:id',paasport.checkAuthentication, commentController.destory );
module.exports = router;
