function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const a = arr[i].toString();
    const b = arr[i + 1].toString();
    if (a.split('').reverse().join('') === b) {
      return [arr[i], arr[i + 1]];
    }
  }
  return [-1, -1];
}