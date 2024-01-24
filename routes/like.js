const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likecontroller');
router.post('/toggle', likeController.toggleLike);


module.exports = router;