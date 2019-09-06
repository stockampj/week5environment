export class Person {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.lifeRemaining;
  }

  calcExp() {
    if (this.sex === "male") {
      this.lifeRemaining = parseFloat(76.9 - this.age).toFixed(1);
    } else if (this.sex === "female") {
      this.lifeRemaining = parseFloat(81.6 - this.age).toFixed(1);
    } else {
      this.lifeRemaining = parseFloat(79.3 - this.age).toFixed(1);
    }
    this.lifeRemaining = parseFloat(this.lifeRemaining);
  };
}







// class Planet {
//   constructor(name, solarConverter) {
//     this.name = name;
//   }
// }
