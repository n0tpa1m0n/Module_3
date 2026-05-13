function Plugboard(wires) {
  this.wires = {};

  if (wires) {
    if (wires.length % 2 !== 0 || wires.length > 20) {
      throw new Error('Invalid wires');
    }
    var used = {};
    for (var i = 0; i < wires.length; i += 2) {
      var a = wires[i];
      var b = wires[i + 1];
      if (a === b || used[a] || used[b]) {
        throw new Error('Invalid wire pair');
      }
      used[a] = true; 
      used[b] = true;
      this.wires[a] = b;
      this.wires[b] = a;
    }
  }
}

Plugboard.prototype.process = function (char) {
  return this.wires[char] || char;
};