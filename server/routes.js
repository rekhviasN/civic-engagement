const express = require('express');
const Google = require('./api/google');
const nytimes = require('./api/nytimes');
// const wsj = require('./api/wsj');
// const reuters = require('./api/reuters');
// const apnews = require('./api/apnews');

const router = express.Router();

router.get('/representatives/:address', Google.getReps);
router.get('/voting/:address', Google.getVoterInfo);

router.get('/nytimes/:name', nytimes.getArticles);
// router.get('/wsj/:name', wsj.getArticles); // only allows top headlines
// router.get('/reuters/:name', reuters.getArticles);
// router.get('/apnews/:name', apnews.getArticles);

router.get('/test', (req, res) => {
  console.log('got it');
  res.send({ data: 'data!' });
});


module.exports = router;
