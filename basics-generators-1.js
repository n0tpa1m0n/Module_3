function* counter() {
  let count = 1;
  while (true) {
    const resetValue = yield count;
    
    if (typeof resetValue === 'number') {
      count = resetValue;
    } else {
      count++;
    }
  }
}