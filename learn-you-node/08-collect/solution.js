// Generated by CoffeeScript 1.6.3
(function() {
  var done, http, url;

  http = require('http');

  url = process.argv[2];

  done = function(res) {
    var data;
    data = '';
    res.setEncoding('utf8');
    res.on('error', console.error);
    res.on('data', function(d) {
      return data += d;
    });
    return res.on('end', function() {
      console.log(data.length);
      return console.log(data);
    });
  };

  http.get(url, done).on('error', console.error);

}).call(this);
