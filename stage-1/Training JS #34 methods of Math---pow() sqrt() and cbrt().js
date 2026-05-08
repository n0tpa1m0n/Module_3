function cutCube(volume, n) {
  const isPerfectCube = (num) => {
    const root = Math.round(Math.cbrt(num));
    return root * root * root === num;
  };
  
  return isPerfectCube(volume) && isPerfectCube(volume / n);
}