/**
 * Sockets
 * A module for socket properties.
 *
 * @module socket
 */

module.exports = function() {
  'use strict';

  let debug = require('debug')('sockets');
  debug('exported');

  App.io.on('connection', function(socket) {

    // Handle new connection
    App.controllers.game.connection();

    // Handle disconnect
    socket.on('disconnect', function () { App.controllers.game.disconnection(socket) });

    // On bet
    socket.on('bet', (data) => { App.controllers.game.bet(data, socket);});

    // On search
    socket.on('search', (data) => { App.controllers.game.search(data, socket);});

    // Get Money
    socket.on('getMoney', (data) => { App.controllers.game.getMoney(data, socket);});

    // On Chat
    socket.on('chat', (data) => { App.controllers.game.chat(data, socket);});
  });
};