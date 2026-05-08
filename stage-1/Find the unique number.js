function findUniq(arr) {
   let common = arr[0] === arr[1] ? arr[0] : arr[2];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== common) {
      return arr[i];
    }
  }
}
