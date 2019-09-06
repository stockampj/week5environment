export class Person {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.earthRemainder;
  }

  calcExp() {
    let remainder = ""
    if (this.sex === "male") {
      remainder = parseFloat(76.9 - this.age).toFixed(1);
    } else if (this.sex === "female") {
      remainder = parseFloat(81.6 - this.age).toFixed(1);
    } else {
      remainder = parseFloat(79.3 - this.age).toFixed(1);
    }
    this.earthRemainder = parseFloat(remainder);
    return this.earthRemainder;
  }
}

export class Planet {
  constructor(name, solarConverter, position) {
    this.name = name;
    this.solarConverter = solarConverter
    this.position = position
  }
  calcUserAge(user){
    let convertedAge = ((user.age)/(this.solarConverter)).toFixed(1);
    convertedAge = parseFloat(convertedAge);
    return convertedAge;
  }
  calcYearsRemaing(user){
    let earthRemainder = user.calcExp();
    let convertedRemainder = ((earthRemainder)/(this.solarConverter)).toFixed(1);
    convertedRemainder = parseFloat(convertedRemainder);
    if (convertedRemainder>=0) {
      return "you have " + convertedRemainder + " years left on " + this.name;
    } else if (convertedRemainder<0)
      return "you are " + convertedRemainder*(-1) + " years past due on " + this.name;
  }
}

export class SolarSystem {
  constructor() {
    const mercury = new Planet("Mercury", .24, 1);
    const venus = new Planet("Venus", .62, 2);
    const earth = new Planet("Earth", 1, 3);
    const mars = new Planet("Mars", 1.88, 4);
    const jupiter = new Planet ("Jupiter", 11.86, 5);
    const saturn = new Planet ("Saturn", 29.48, 6);
    const uranus = new Planet ("Uranus", 84.07, 7);
    const neptune = new Planet ("Neptune", 164.8, 8);
    const pluto = new Planet ("Pluto", 164.8, 9);
    this.system = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];
  }

  getPlanet(name) {
    let system = this.system;
    let reference = name;
    for (let i=0;i<9;i++) {
      if (system[i].name === reference) {
        return system[i];
      }
    }
    return false;
  }
}


let joel = new Person ("Joel", 36, "male");
joel.calcExp();
