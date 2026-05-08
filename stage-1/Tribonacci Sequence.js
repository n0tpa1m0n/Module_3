function tribonacci(signature, n) {
  if (n === 0) return [];

  let arr = [...signature];

  for (let i = 3; i < n; i++) {
    let sum = arr[i - 1] + arr[i - 2] + arr[i - 3];
    arr.push(sum);
  }

  return arr.slice(0, n);
}
