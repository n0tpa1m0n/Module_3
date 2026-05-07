function spinWords(string){
  let words = string.split(" ");
  let result = words.map(word => {
    if(word.length >= 5){
      return word.split('').reverse().join('')
    }
    
    return word;
  })
  return result.join(" ")
}

// or 

function spinWords(string) {
  let words = string.split(' '); 
  let result = [];         

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length >= 5) {
      let reversed = word.split('').reverse().join('');
      result.push(reversed);
    } else {
      result.push(word);
    }
  }

  return result.join(' '); 
}