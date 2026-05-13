function* fibonacci() {
  var a = 0, b = 1;
  yield a;
  yield b;
  while (true) {
    var next = a + b;
    yield next;
    a = b;
    b = next;
  }
}
//was retired