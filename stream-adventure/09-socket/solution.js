// Generated by CoffeeScript 1.6.3
(function() {
  var ws;

  ws = require('websocket-stream');

  ws('ws://localhost:8000').end('hello\n');

}).call(this);