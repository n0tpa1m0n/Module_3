Object.defineProperty(Person.prototype, 'name', {
  get: Person.prototype.getName,
  set: function (name) {
    var parts = name.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
});