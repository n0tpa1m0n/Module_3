function shuffleIt(arr, ...pairs) {
  const result = [...arr];
  for (let i = 0; i < pairs.length; i++) {
    const [a, b] = pairs[i];
    [result[a], result[b]] = [result[b], result[a]];
  }
  return result;
}