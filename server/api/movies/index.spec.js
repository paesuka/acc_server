'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var moviesCtrlStub = {
  index: 'moviesCtrl.index',
};

var routerStub = {
  get: sinon.spy(),
};

// require the index with our stubbed out modules
var moviesIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './movies.controller': moviesCtrlStub
});

describe('Movies API Router:', function() {

  it('should return an express router instance', function() {
    moviesIndex.should.equal(routerStub);
  });

  describe('GET /api/v0/movies', function() {

    it('should route to movies.controller.index', function() {
      routerStub.get
        .withArgs('/', 'moviesCtrl.index')
        .should.have.been.calledOnce;
    });
  });
});
