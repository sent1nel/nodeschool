// Generated by CoffeeScript 1.6.3
(function() {
  var fs, match;

  fs = require('fs');

  match = function(path, filter, done) {
    var matching, regex;
    regex = new RegExp("\\." + filter + "$");
    matching = function(d) {
      return regex.test(d);
    };
    return fs.readdir(path, function(err, list) {
      var dir, matched;
      if (err) {
        return done(err);
      } else {
        matched = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = list.length; _i < _len; _i++) {
            dir = list[_i];
            if (matching(dir)) {
              _results.push(dir);
            }
          }
          return _results;
        })();
        return done(null, matched);
      }
    });
  };

  module.exports = match;

}).call(this);
