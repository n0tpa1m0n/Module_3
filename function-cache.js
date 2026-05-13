function cache(func) {
  var cached = {};
  return function () {
    var key = JSON.stringify(arguments);
    if (cached.hasOwnProperty(key)) {
      return cached[key];
    }
    var result = func.apply(this, arguments);
    cached[key] = result;
    return result;
  };
}

//or

const cache = require('lodash/memoize');