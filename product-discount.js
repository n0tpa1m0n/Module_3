const ProductsDiscount = new WeakMap();

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  setDiscount(percent) {
    ProductsDiscount.set(this, percent);
  }

  getDiscount() {
    return ProductsDiscount.get(this);
  }
}

let p1 = new Product("Laptop", 2000);
let p2 = new Product("Phone", 1000);
let p3 = new Product("Tablet", 1500);

p1.setDiscount(10);
p2.setDiscount(20);
p3.setDiscount(15);

console.log("Before delete:", ProductsDiscount);

p2 = null;

setTimeout(() => {
  console.log("After delete:", ProductsDiscount);
}, 1000);