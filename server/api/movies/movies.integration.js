'use strict';

var app = require('../..');
var request = require('supertest');

describe('Movie API:', function() {

  describe('GET /api/v0/movies', function() {
    var movies;

    beforeEach(function(done) {
      request(app)
        .get('/api/v0/movies')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          movies = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      movies.should.be.instanceOf(Array);
    });
  });
});
