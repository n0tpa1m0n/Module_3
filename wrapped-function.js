Function.prototype.wrap = function wrap(f) {
  return (...args) => f(this, ...args);
};