class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name = 'Adam') {
    super(name);
  }
}

class Woman extends Human {
  constructor(name = 'Eve') {
    super(name);
  }
}

class God {
  static create() {
    return [new Man(), new Woman()];
  }
}