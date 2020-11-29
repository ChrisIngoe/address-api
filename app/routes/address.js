'use strict';

const addressService = require('../services/addressService');

exports.postcodeSearch = function (req, res) {
  const postcode = req.params.postcode;
  addressService.postcodeSearch(postcode, function(err, data){
    if (err){
      return res.status(500).send('Internal server error');
    } else {
      return res.status(200).json( data );
    }   
  });
};
