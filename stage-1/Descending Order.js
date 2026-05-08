function descendingOrder(n){
    let result = String(n).split('');
    result.sort((a,b) => b - a);
    return Number(result.join(''))
  
}

//or

function descendingOrder(n){
    return parseInt(String(n).split('').sort((a,b) => b - a).join(''))
}
