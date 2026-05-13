function nouveau(Constructor) {
  var args = Array.prototype.slice.call(arguments, 1);

  var instance = Object.create(Constructor.prototype);
  var result = Constructor.apply(instance, args);
  
  return (typeof result === 'object' || typeof result === 'function') && result !== null ? result : instance;
}