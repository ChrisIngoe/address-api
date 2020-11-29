'use strict';

const axios = require('axios'),
  config = require('config');

exports.postcodeSearch = function (postcode, callback) {
  axios.get(`${config.get('postcode-service.url')}/${postcode}`)
  .then(function (response) {
    return callback(null, response.data.result);
  })
  .catch(function (error) {
    return callback(error);
    })
};
