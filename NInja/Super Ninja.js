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

// child class of Sensai that inherits Ninja
class Sensai extends Ninja {
  constructor(name) {
    this.health = 450;
    this.speed = 25;
    this.strength = 75;
    this.wisdom = 10;
  }
  speakWisdom() {
    const sake = super.drinkSake();
    console.log("Wisdom:" + this.wisdom + "What one programmer can do in one month, two programmers can do in two months.");
    return this;
  }
}

// example output
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
// superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
