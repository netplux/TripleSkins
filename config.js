/**
 * Config
 * A module for config properties.
 *
 * @module config
 */

module.exports = function() {
  'use strict';

  return {

    db_path: 'mongodb://localhost:27017/tripleskins',

    db_collections: ['users', 'history', 'items', 'chat', 'purchased', 'affiliates', 'statistics'],

    apiKey: '615F3F9D56B2268A431E445A98079D3C',

    /**
     * The port that the app will run on.
     * @type {number}
     */
    port: 80
  };
};