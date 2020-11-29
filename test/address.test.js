'use strict';

var app = require('../app'),
  request = require('supertest'),
  expect = require('chai').expect,
  sinon = require('sinon'),
  addressService = require('../app/services/addressService');

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
  describe('#GET / invalid', function () {
    it('should get Bad response and an error', function (done) {
      request(app)
        .get('/postcode/invalid')
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
  describe('#GET / invalidparameter', function () {
    it('should get Bad response and an error', function (done) {
      request(app)
        .get('/postcode/invalidparameter')
        .expect(400)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          expect(res.text).to.exist;
          expect(res.text).equals('Bad request');
          done();
        });
    });
  });
});

describe('Address API endpoint Component Tests', function () {
  let addressServiceStub;
  beforeEach(function() {
    addressServiceStub = sinon.stub(addressService, "postcodeSearch").yields(null, {country: 'France'});
  });
  afterEach(function() {
    addressServiceStub.restore();
  });
  describe('#GET / postcode', function () {
    const data = {country: 'France'};
    it('should get OK response and an address', function(done) {
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
          expect(res.body.country).equals('France');
          done();
        });
    });
  });
});
