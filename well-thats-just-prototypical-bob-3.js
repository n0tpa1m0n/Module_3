function Cart(user) {
  this.user = user;
  this.cart = [];
}

Cart.prototype.add = function(item) {
  this.cart.push(item);
};

Cart.prototype.remove = function(item) {
  this.cart = this.cart.filter(i => i.id !== item.id);
};

Cart.prototype.clear = function() {
  this.cart = [];
};

Cart.prototype.subtotal = function() {
  return this.cart.reduce((sum, item) => sum + item.quantity * item.value, 0);
};

Cart.prototype.toString = function() {
  return this.cart
    .map(item => `${item.name}: ${item.quantity}@ ${item.value} ea.`)
    .join("\n");
};