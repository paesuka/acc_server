'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options TODO use system env for user and passwort
  mongo: {
    uri: 'mongodb://acc-user:pw@ds019633.mlab.com:19633/acc-db'
  },

  // Seed database on startup
  seedDB: true

};
