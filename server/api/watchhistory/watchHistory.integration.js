'use strict';

var app = require('../..');
var request = require('supertest');

var newWatchItem;
var testTitle = 'This is the brand new thing';

describe('WatchHistory API:', function() {

  describe('GET /api/v0/watchhistory', function() {
    var watchHistory;

    beforeEach(function(done) {
      request(app)
        .get('/api/v0/watchhistory')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          watchHistory = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      watchHistory.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/v0/watchhistory', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/v0/watchhistory')
        .send({
          title: testTitle,
          movieId: 1111,
          watchDate: new Date(),
          userId: 1
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newWatchItem = res.body;
          done();
        });
    });

    it('should respond with the newly created thing', function() {
      newWatchItem.title.should.equal(testTitle);
    });

  });

  describe('GET /api/v0/watchhistory/:userId', function() {
    var watchHistory;

    beforeEach(function(done) {
      request(app)
        .get('/api/v0/watchhistory/' + newWatchItem.userId)

      .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          watchHistory = res.body;
          done();
        });
    });

    afterEach(function() {
      watchHistory = {};
    });

    it('should respond with the requested thing', function() {
      watchHistory.should.be.instanceOf(Array);
      watchHistory[0].title.should.equal(testTitle);
    });

  });
});
