'use strict';

exports.postcodeSearch = function (req, res) {
  const postcode = req.params.postcode;
  return res.status(200).json({ postcode });
};
