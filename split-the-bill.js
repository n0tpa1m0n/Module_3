function splitTheBill(x) {
  var values = Object.values(x);
  var sum = values.reduce(function (a, b) { return a + b; }, 0);
  var avg = sum / values.length;
  var result = {};
  Object.keys(x).forEach(function (key) {
    result[key] = Math.round((x[key] - avg) * 100) / 100;
  });
  return result;
}