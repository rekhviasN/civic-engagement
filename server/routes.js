const express = require('express');
const Google = require('./api/google.js');
const nytimes = require('./api/nytimes.js');

const router = express.Router();

router.get('/representatives/:address', Google.getReps);
router.get('/voting/:address', Google.getVoterInfo);

router.get('/nytimes/', nytimes.articleSearch);

router.get('/test', (req, res) => {
  console.log('got it');
  res.send({ data: 'data!' });
});


module.exports = router;
