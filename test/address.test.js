'use strict';

var app = require('../app'),
  request = require('supertest'),
  expect = require('chai').expect;

describe('Address API endpoint Integration Tests', function () {
  describe('#GET / postcode', function () {
    it('should get OK response and an address', function (done) {
      request(app)
        .get('/postcode/sn381nw')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.exist;
          expect(res.body).to.be.an('object');
          expect(res.body.country).equals('England');
          done();
        });
    });
  });
  describe('#GET / invalidpostcode', function () {
    it('should get Bad response and an error', function (done) {
      request(app)
        .get('/postcode/invalidpostcode')
        .expect(500)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          expect(res.text).to.exist;
          expect(res.text).equals('Internal server error');
          done();
        });
    });
  });
});
