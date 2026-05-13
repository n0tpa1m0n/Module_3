function* generator(a, b) {
    function* table(num) {
    for (let i = 1; i <= 10; i++) {
      yield `${num} x ${i} = ${num * i}`;
    }
  }

  for (let current = a; current <= b; current++) {
    yield table(current);
  }
}