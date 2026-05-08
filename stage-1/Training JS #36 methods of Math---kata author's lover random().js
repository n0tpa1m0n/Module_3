function rndCode() {
  const letters = "ABCDEFGHIJKLM";
  const symbols = "~!@#$%^&*";
  
  const letterPart = Array.from({ length: 2 }, () => 
    letters[Math.floor(Math.random() * letters.length)]
  ).join('');
  
  const digitPart = Array.from({ length: 4 }, () => 
    Math.floor(Math.random() * 10)
  ).join('');
  
  const symbolPart = Array.from({ length: 2 }, () => 
    symbols[Math.floor(Math.random() * symbols.length)]
  ).join('');
  
  return letterPart + digitPart + symbolPart;
}