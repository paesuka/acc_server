/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import WatchHistory from '../api/watchhistory/watchHistory.model';

WatchHistory.find({}).removeAsync()
  .then(function() {
    WatchHistory.create({
      title: 'things I did',
      movieId: 1,
      watchDate: new Date(),
      session: 'sess1'
    },{
      title: 'things I saw',
      movieId: 2,
      watchDate: new Date(),
      session: 'sess1'
    },{
      title: 'things I ignored',
      movieId: 3,
      watchDate: new Date(),
      session: 'sess2'
    });
  });
