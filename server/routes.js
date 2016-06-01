/**
 * Main application routes
 */
'use strict';

import errors from './components/errors';
import path from 'path';

module.exports = function(app) {

  // Insert routes below

  app.use('/api/v0/watchhistory', require('./api/watchhistory'));
  app.use('/api/v0/movies', require('./api/movies'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth)/*')
   .get(errors[404]);

};
