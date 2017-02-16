const express = require('express');
const Google = require('./api/google');
const nytimes = require('./api/nytimes');

const router = express.Router();

router.get('/representatives/:address', Google.getReps);
router.get('/voting/:address', Google.getVoterInfo);

router.get('/nytimes/:name', nytimes.getArticles);

router.get('/test', (req, res) => {
  console.log('got it');
  res.send({ data: 'data!' });
});


module.exports = router;
