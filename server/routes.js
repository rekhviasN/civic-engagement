const express = require('express');
const Google = require('./api/google.js');

const router = express.Router();

router.get('/representatives/:address', Google.getReps);

// router.get('/voting', ) TODO: create voting information route

module.exports = router;
