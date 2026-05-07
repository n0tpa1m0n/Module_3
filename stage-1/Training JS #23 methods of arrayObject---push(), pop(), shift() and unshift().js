function infiniteLoop(arr, d, n) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    flat.push(...arr[i]);
  }
  
  const len = flat.length;
  if (d === "left") {
    let moved = flat.splice(0, n % len);
    flat.push(...moved);
  } else if (d === "right") {
    let moved = flat.splice(len - (n % len), n % len);
    flat.unshift(...moved);
  }
  
  const result = [];
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    const subLen = arr[i].length;
    result.push(flat.slice(idx, idx + subLen));
    idx += subLen;
  }
  return result;
}