function roundIt(n) {
  const [left, right] = n.toString().split(".");

  if (left.length < right.length) {
    return Math.ceil(n);
  } else if (left.length > right.length) {
    return Math.floor(n);
  } else {
    return Math.round(n);
  }
}