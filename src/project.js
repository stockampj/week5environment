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

export class Planet {
  constructor(name, solarConverter, position) {
    this.name = name;
    this.solarConverter = solarConverter
    this.position = position
  }
  calcUserAge(user){
    var convertedAge = ((user.age)/(this.solarConverter)).toFixed(1);
    convertedAge = parseFloat(convertedAge);
    return convertedAge;
  }
}

class SolarSystem {
  constructor() {
    var mercury = new Planet("Mercury", .24, 1);
    var venus = new Planet("Venus", .62, 2);
    var earth = new Planet("Earth", 1, 3);
    var mars = new Planet("Mars", 1.88, 4);
    var jupiter = new Planet ("Jupiter", 11.86, 5);
    var saturn = new Planet ("Saturn", 29.48, 6);
    var uranus = new Planet ("Uranus", 84.07, 7);
    var neptune = new Planet ("Neptune", 164.8, 8);
    var pluto = new Planet ("Pluto", 164.8, 9);
    this.system = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];
  }

  getPlanet(name) {
    var system = this.system;
    var reference = name;
    for (var i=0;i<9;i++) {
      if (system[i].name = reference) {
        return system[i]
      }
    }
  }
  
}


var joel = new Person ("Joel", 36, "male");
joel.calcExp();
