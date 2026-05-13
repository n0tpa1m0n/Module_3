class Block {
  constructor([width, length, height]) {
    this.x = width
    this.y = length
    this.z = height
  }
  
  getWidth() { return this.x }
  getLength() { return this.y }
  getHeight() { return this.z }
  
  getVolume() {
    return this.x * this.y * this.z
  }
  
  getSurfaceArea() {
    return 2 * this.x * this.y + 2 * this.x * this.z + 2 * this.y * this.z
  }
}