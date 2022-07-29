class Ninja {
  // Parenthesis are the attributes - name and health
  constructor(name, health = 10) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }
  // sayName is the Method
  sayName() {
    console.log("My name is ${this.name}");
    return this;
  }
  showStats() {
    console.log("Name:  ${this.name}");
    console.log("Health:  ${this.health}");
    console.log("Speed:  ${this.speed}");
    console.log("Strength:  ${this.strength}");
  }
  drinkSake() {
    console.log("${this.name} has sake and gained ${this.health}");
    this.health += 10;
    return this;
  }
}
