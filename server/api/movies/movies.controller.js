/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/movies              ->  index
 */

'use strict';

var Movies = require('./movies.model');

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

// Get all Movies
exports.index = function(req, res) {
  Movies.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
};
