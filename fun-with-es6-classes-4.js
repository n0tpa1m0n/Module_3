class Cube {
  constructor(length) {
    this.length = length;
  }

  get surfaceArea() {
    return 6 * this.length * this.length;
  }

  set surfaceArea(area) {
    this.length = Math.sqrt(area / 6);
  }

  get volume() {
    return this.length * this.length * this.length;
  }

  set volume(vol) {
    this.length = Math.cbrt(vol);
  }
}