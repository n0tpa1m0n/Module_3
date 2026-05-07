function sumMul(n,m){

    if(m <= n){
        return 'INVALID'
    }

    let sum = 0;
    
    for(let i = 0; i <= m; i += n){
        sum += i;
    }

    return sum;
}   