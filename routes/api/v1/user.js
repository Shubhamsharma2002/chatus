const express = require('express');
const router = express.Router();
const userApi = require('../../../controllers/api/v1/user_api')
console.log('fired')
router.post('/createsession', userApi.createSession);
module.exports = router;