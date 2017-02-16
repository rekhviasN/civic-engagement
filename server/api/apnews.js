// not used

const request = require('request');
const param = require('jquery-param');

const apnewsApiKey = process.env.APNEWS_APIKEY;

const articleSearchURL = '';

const apnews = {
  getArticles: (req, res) => {
    const options = {
      'api-key': apnewsApiKey,
      q: req.params.name,
      fq: 'news_desk:("politics")',
      sort: 'newest'
    };
    // console.log(options);
    // console.log(`in apnews article search api route with options: ${options}`);
    request.get(`${articleSearchURL}?${param(options)}`, (err, response, body) => {
      if (err) {
        console.error(err);
      } else {
        res.status(200).send(body);
      }
    });
  }
};

module.exports = apnews;
