function pipeline(seed) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.reduce(function (val, fn) {
    return fn(val);
  }, seed);
}

function compose() {
  var fns = Array.prototype.slice.call(arguments);
  return function (obj) {
    return fns.reduceRight(function (val, fn) {
      return fn(val);
    }, obj);
  };
}