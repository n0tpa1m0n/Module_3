function howManySmaller(arr, n) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let fixed = parseFloat(arr[i].toFixed(2)); 
    if (fixed < n) {
      count++;
    }
  }

  return count;
}

//or
function howManySmaller(arr,n){
  return arr.filter(x => +x.toFixed(2) < n).length;
}