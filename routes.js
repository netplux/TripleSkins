/**
 * Routes
 * A module for route properties.
 *
 * @module route
 */

module.exports = function() {
  'use strict';

  let debug = require('debug')('routes');
  debug('exported');

  App.Express.get('*', App.controllers.utils.setUser);

  // Home Route
  App.Express.get('/', App.controllers.home.render);

  // Login Route
  App.Express.get('/auth', App.controllers.auth.login);

  // Login Return Route
  App.Express.get('/auth/return', App.controllers.auth.login);

  // Logout Route
  App.Express.get('/logout', App.controllers.auth.logout);

  // Deposit Route
  App.Express.get('/deposit', App.controllers.trade.deposit);

  // Receive Route
  App.Express.get('/api/receive/:key/:user/:amount', App.controllers.trade.receive);

  // Tradelink Route
  App.Express.get('/tradelink', App.controllers.trade.tradelink);

  // Set Tradelink Route
  App.Express.post('/tradelink', App.controllers.trade.setTradeLink);

  // Set Shop Route
  App.Express.get('/shop', App.controllers.trade.shop);

  // Set getPrice Route
  App.Express.get('/getPrice/:name', App.controllers.trade.getPrice);

  // Set sendOffer
  App.Express.get('/sendOffer/:item/:key', App.controllers.trade.sendOffer);

  // Affiliates
  App.Express.get('/affiliates', App.controllers.affiliates.render);

  // Affiliates Redeem
  App.Express.post('/affiliates/redeem', App.controllers.affiliates.redeem);

  // Affiliates Create
  App.Express.post('/affiliates/create', App.controllers.affiliates.create);

  // Panel Route
  App.Express.get('/panel', App.controllers.utils.panel_render);

  // Panel Route
  App.Express.get('/playerinfo/:user', App.controllers.utils.playerinfo);

  // logOnMain Route
  App.Express.post('/logOnMain', App.controllers.auth.loginOnMain);

  // 404 Route
  App.Express.get('*', App.controllers.utils.notFound);

};