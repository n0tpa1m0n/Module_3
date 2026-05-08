function getCount(words) {
  if (typeof words !== "string") {
    return { vowels: 0, consonants: 0 };
  }

  let vowels = 0;
  let consonants = 0;

  for (let char of words.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      if ("aeiou".includes(char)) vowels++;
      else consonants++;
    }
  }

  return { vowels, consonants };
}
