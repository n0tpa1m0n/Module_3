function firstToLast(str, c) {
  const first = str.indexOf(c);
  const last = str.lastIndexOf(c);

  if (first === -1) return -1;
  return last - first;
}