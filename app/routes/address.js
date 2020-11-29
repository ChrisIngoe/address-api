'use strict';

const axios = require('axios'),
  config = require('config');

exports.postcodeSearch = function (req, res) {
  const postcode = req.params.postcode;
  axios.get(`${config.get('postcode-service.url')}/${postcode}`)
  .then(function (response) {
    return res.status(200).json( response.data.result );
  })
  .catch(function (error) {
    return res.status(500).send('Internal server error');
    })
};
