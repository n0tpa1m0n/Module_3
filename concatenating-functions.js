Function.prototype.pipe = function (fn) {
  var that = this;
  return function (arg) {
    return fn(that(arg));
  };
};