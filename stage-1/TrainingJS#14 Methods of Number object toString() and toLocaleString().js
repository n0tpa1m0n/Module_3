function colorOf(r, g, b) {
  function toHex(n) {
    let hex = n.toString(16);
    if (hex.length === 1) {
      hex = "0" + hex; 
    }
    return hex;
  }

  return "#" + toHex(r) + toHex(g) + toHex(b);
}
