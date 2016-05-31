'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var watchHistoryCtrlStub = {
  index: 'watchHistoryCtrl.index',
  show: 'watchHistoryCtrl.show',
  create: 'watchHistoryCtrl.create',
};

var routerStub = {
  get: sinon.spy(),
  post: sinon.spy(),
};

// require the index with our stubbed out modules
var watchHistoryIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './watchHistory.controller': watchHistoryCtrlStub
});

describe('WatchHistory API Router:', function() {

  it('should return an express router instance', function() {
    watchHistoryIndex.should.equal(routerStub);
  });

  describe('GET /api/v0/watchhistory', function() {

    it('should route to watchHistory.controller.index', function() {
      routerStub.get
        .withArgs('/', 'watchHistoryCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/v0/watchhistory:session', function() {

    it('should route to watchHistory.controller.show', function() {
      routerStub.get
        .withArgs('/:session', 'watchHistoryCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/v0/watchhistory', function() {

    it('should route to watchHistory.controller.create', function() {
      routerStub.post
        .withArgs('/', 'watchHistoryCtrl.create')
        .should.have.been.calledOnce;
    });

  });
});
