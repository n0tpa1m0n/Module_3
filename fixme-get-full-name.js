function Dinglemouse(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Dinglemouse.prototype.getFullName = function () {
  return (this.firstName + ' ' + this.lastName).trim();
};