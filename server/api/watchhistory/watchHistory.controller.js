/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/watchhistory             ->  index
 * POST    /api/watchhistory             ->  create
 * GET     /api/watchhistory/:userId     ->  show
 */

'use strict';

var WatchHistory = require('./watchHistory.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

// Get all WatchItems
exports.index = function(req, res) {
  WatchHistory.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Get a WatchHistory from the DB
exports.show = function(req, res) {
  WatchHistory.find({'userId': req.params.userId})
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new WatchItem in the DB
exports.create = function(req, res) {
  WatchHistory.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};
