'use strict';

const axios = require('axios');

exports.postcodeSearch = function (req, res) {
  const postcode = req.params.postcode;
  axios.get(`https://postcodes.io/postcodes/${postcode}`)
  .then(function (response) {
    return res.status(200).json( response.data.result );
  })
  .catch(function (error) {
    return res.status(500).send('Internal server error');
    })
};
