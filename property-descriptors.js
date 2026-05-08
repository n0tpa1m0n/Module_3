const person = {
  name: "Liza",
  age: 19,
  job: "Frontend Developer"
};

console.log("Initial descriptors:");
console.log(Object.getOwnPropertyDescriptors(person));

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(person, "age", {
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(person, "job", {
  writable: false,
  enumerable: false,
  configurable: false
});

console.log("trying to modify:");
person.name = "Katya"; 
console.log(person.name);

console.log("trying to enumerate:");
console.log(Object.keys(person)); 

console.log("trying to delete:");
delete person.job;
console.log(person.job);