function tailAndHead(arr) {
  return arr.slice(0, -1).reduce((product, curr, i) => {
    const tail = curr % 10;
    const head = Number(String(arr[i + 1])[0]);
    return product * (tail + head);
  }, 1);
}