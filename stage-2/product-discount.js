const ProductsDiscount = new WeakMap();

class Product {
  constructor(id, name, price) {
    this.id = id;
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

let products = [
  new Product(1, "Laptop", 2000),
  new Product(2, "Phone", 1000),
  new Product(3, "Tablet", 1500)
];

products[0].setDiscount(10);
products[1].setDiscount(20);
products[2].setDiscount(15);

console.log("Before removal:", ProductsDiscount);

function removeProductById(id) {
  products = products.filter(p => p.id !== id);
}

removeProductById(2);

setTimeout(() => {
  console.log("After removal:", ProductsDiscount);
}, 500);