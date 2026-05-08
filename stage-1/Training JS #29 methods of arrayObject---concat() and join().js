function bigToSmall(arr) {
  return arr
    .reduce((a, b) => a.concat(b), [])   
    .sort((a, b) => b - a) 
    .join(">");  
}
