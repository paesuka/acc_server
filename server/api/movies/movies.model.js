'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  title: String,
  description: String,
  type: String,
  publishedDate: Number,
  availableDate: Number,
  metadata: [{
    value: String,
    name: String
  }],
  contents: [{
    url: String,
    format: String,
    width: Number,
    height: Number,
    language: String,
    duration: Number,
    geoLock: Boolean,
    id: String
  }],
  credits: [{
    role: String,
    name: String
  }, {
    role: String,
    name: String
  }, {
    role: String,
    name: String
  }, {
    role: String,
    name: String
  }],
  parentalRatings: [{
    scheme: String,
    rating: String
  }],
  images: [Schema.Types.Mixed],
  // images: [{
  //   type: String,
  //   url: String,
  //   width: Number,
  //   height: Number,
  //   id: String
  // }],
  categories: [{
    title: String,
    description: String,
    id: String
  }, {
    title: String,
    description: String,
    id: String
  }, {
    title: String,
    description: String,
    id: String
  }],
  id: String
});

module.exports = mongoose.model('Movie', MovieSchema);
