'use strict';

const axios = require('axios');

exports.postcodeSearch = function (req, res) {
  const postcode = req.params.postcode;
  console.log(postcode);
  axios.get(`https://postcodes.io/postcodes/${postcode}`)
  .then(function (response) {
    console.log(response);
    return res.status(200).json( response.data.result );
  })
  .catch(function (error) {
    console.log(error);
    return res.status(500).send('Internal server error');
    })
};
