# acc-server

[![Build Status](https://travis-ci.org/paesuka/acc_server.svg?branch=master)](https://travis-ci.org/paesuka/acc_server)

## API Resources

- [GET  /movies](#get-movies)
- [GET  /watchhistory](#get-watchhistory)
- [GET  /watchhistory/[userId]](#get-watchhistoryuserid)
- [POST /watchhistory](#post-watchhistory)

## GET /movies

Example: <http://immense-tor-76076.herokuapp.com/api/v0/movies>

Response body:
```
[{
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
}]
```
## GET /watchhistory

Example: <http://immense-tor-76076.herokuapp.com/api/v0/watchhistory>

Response body:
```
[{
  title: String,
  movieId: String,
  watchDate: Date,
  userId: Number
}]
```
## GET /watchhistory/[userId]

Example: <http://immense-tor-76076.herokuapp.com/api/v0/watchhistory/1465116060635>

Response body:
```
[{
  title: String,
  movieId: String,
  watchDate: Date,
  userId: Number
}]
```
## POST /watchHistory

Example: POST <http://immense-tor-76076.herokuapp.com/api/v0/watchhistory>

Request body:
```
[{
  title: String,
  movieId: String,
  watchDate: Date,
  userId: Number
}]
```
## Developing

Make sure you are able to execute the command 'make' for node-gyp rebuilds with node version >= 4.x.
For Ubuntu based systems, run 'sudo apt-get install build-essential g++'.
For RedHat based systems, run 'sudo dnf install make automake gcc gcc-c++ kernel-devel'.
For OS X install the Xcode Command Line Tools and accept the license!

1. Run `npm install -g grunt-cli` to install necessary tools.

2. Run `npm install` to install server dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
