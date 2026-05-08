function maxMin(arr1, arr2) {
  const diffs = arr1.map((n, i) => Math.abs(n - arr2[i]));
  return [Math.max(...diffs), Math.min(...diffs)];
}
