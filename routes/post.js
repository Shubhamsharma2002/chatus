const express = require('express');
const router = express.Router();
const paasport = require('passport');
const postContrller = require('../controllers/postcontroller');

router.post('/create',paasport.checkAuthentication, postContrller.create);
router.get('/destory/:id', paasport.checkAuthentication, postContrller.destory);
module.exports = router;

