'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var WatchHistorySchema = new Schema({
  title: String,
  movieId: String,
  watchDate: Date,
  session: String
});

module.exports = mongoose.model('WatchHistory', WatchHistorySchema);
