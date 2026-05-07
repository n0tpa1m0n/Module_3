function isolateIt(arr) {
  return arr.map(function(str) {
    const mid = Math.floor(str.length / 2);
    if (str.length % 2 === 0) {
      return str.slice(0, mid) + "|" + str.slice(mid);
    } else {
      return str.slice(0, mid) + "|" + str.slice(mid + 1);
    }
  });
}