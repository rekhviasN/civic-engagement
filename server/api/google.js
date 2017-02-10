const request = require('request');

const civApiKey = process.env.GOOGLE_CIV_APIKEY;
const repApiURL = 'https://www.googleapis.com/civicinfo/v2/representatives';

const Google = {
  // Google API too representativeInfoQuery endpoint
  getReps: (req, res) => {
    const address = req.params.address;
    console.log(`${repApiURL}?key=${civApiKey}&${address}`);
    request(
      {
        method: 'GET',
        uri: `${repApiURL}?key=${civApiKey}&address=${address}`,
        gzip: true,
      },
      (error, response, body) => {
        if (error) {
          console.error(error);
        } else {
          res.status(200).send(body);
        }
      });
  },
};

module.exports = Google;
