Array.prototype.reduce = function (process, initial) {
  var arr = this;
  var acc = arguments.length > 1 ? initial : arr[0];
  var start = arguments.length > 1 ? 0 : 1;
  for (var i = start; i < arr.length; i++) {
    acc = process(acc, arr[i], i, arr);
  }
  return acc;
};