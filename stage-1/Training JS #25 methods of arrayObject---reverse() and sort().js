function sortIt(arr) {
  const freq = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    freq[num] = (freq[num] || 0) + 1;
  }
  
  return arr.slice().sort((a, b) => {
    if (freq[a] !== freq[b]) {
      return freq[a] - freq[b];
    }
    return b - a;
  });
}