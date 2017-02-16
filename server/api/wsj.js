const request = require('request');
const param = require('jquery-param');

const wsjApiKey = process.env.WSJ_APIKEY;

const articleSearchURL = 'https://newsapi.org/v1/articles';

const wsj = {
  getArticles: (req, res) => {
    // console.log(`WSJ api-key: ${wsjApiKey}`);
    // console.log(`REST parameter: ${req.params.name}`);
    const options = {
      apiKey: wsjApiKey,
      source: 'the-wall-street-journal',
      sortBy: 'top'
      // q: req.params.name,
      // fq: 'news_desk:("politics")',
    };
    // console.log(options);
    // console.log(`in wsj article search api route with options: ${options}`);
    request.get(`${articleSearchURL}?${param(options)}`, (err, response, body) => {
      if (err) {
        console.error(err);
      } else {
        res.status(200).send(body);
      }
    });
  }
};

module.exports = wsj;
