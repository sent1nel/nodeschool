// Generated by CoffeeScript 1.6.3
(function() {
  var reduce, test;

  module.exports = reduce = function(arr, reducer, init) {
    var curr;
    if (!arr.length) {
      return init;
    }
    curr = arr[0];
    init = reducer(init, curr, 0, arr);
    return reduce(arr.slice(1), reducer, init);
  };

  test = function() {
    var init, ok, result, sum;
    ok = require('assert').ok;
    sum = function(prev, curr, i, arr) {
      return prev + curr;
    };
    result = reduce([1, 2, 3], sum, init = 0);
    return ok(result === 6);
  };

  test();

}).call(this);
