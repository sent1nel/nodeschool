// Generated by CoffeeScript 1.6.3
(function() {
  module.exports = function(words) {
    var count, toWordCounts;
    toWordCounts = function(count, word) {
      if (count[word] == null) {
        count[word] = 0;
      }
      count[word] += 1;
      return count;
    };
    return words.reduce(toWordCounts, count = {});
  };

}).call(this);
