class Animal {
    constructor(name, type){
      this._name = name;
      this.type = type;
    }
    get name(){
      return this._name;
    }
  
    set name(newName){
      this._name = newName;
    }
    toString(){
      return `${this.name} is a ${this.type}`
    }
}