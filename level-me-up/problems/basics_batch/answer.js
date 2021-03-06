// Generated by CoffeeScript 1.6.3
(function() {
  var db, doBatch, fs;

  db = require('level')(process.argv[2]);

  fs = require('fs');

  doBatch = function(err, data) {
    var batch, line, parse, _i, _len, _ref;
    if (err) {
      throw err;
    }
    batch = db.batch();
    parse = function(line) {
      var key, op, val, _ref;
      _ref = line.split(','), op = _ref[0], key = _ref[1], val = _ref[2];
      if (op === 'put') {
        batch.put(key, val);
      }
      if (op === 'del') {
        return batch.del(key);
      }
    };
    _ref = data.split('\n');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      line = _ref[_i];
      parse(line);
    }
    return batch.write();
  };

  fs.readFile(process.argv[3], {
    encoding: 'utf8'
  }, doBatch);

}).call(this);
