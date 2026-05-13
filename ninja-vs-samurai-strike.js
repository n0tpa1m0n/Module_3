function Warrior(n) {
  this.name = n;
  this.health = 100;
}

Warrior.prototype.strike = function (enemy, swings) {
  enemy.health = Math.max(0, enemy.health - (swings * 10));
};