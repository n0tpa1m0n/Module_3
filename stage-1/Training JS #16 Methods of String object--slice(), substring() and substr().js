function cutIt(arr) {
  let minLen = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < minLen) minLen = arr[i].length;
  }
  return arr.map(str => str.slice(0, minLen));
}