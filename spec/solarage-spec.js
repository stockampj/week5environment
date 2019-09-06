import { Person, Planet, SolarSystem } from './../src/project.js';


describe ('Person', function(){
  it('checks if Person objects age is being held by object', function(){
    var joel = new Person ("Joel", 36, "male");
    expect(joel.age).toEqual(36);
    expect(joel.name).toEqual("Joel");
    expect(joel.sex).toEqual("male");
  });
});

describe ('Person', function(){
  it('checks if life expectancy method calculates remaining years correctly', function(){
    var joel = new Person ("Joel", 36, "male");
    var jill = new Person ("Jill", 36, "female");
    var frank = new Person ("Frank", 36, "");
    joel.calcExp();
    jill.calcExp();
    frank.calcExp();
    expect(joel.earthRemainder).toEqual(40.9);
    expect(jill.earthRemainder).toEqual(45.6);
    expect(frank.earthRemainder).toEqual(43.3);
  });
});


describe ('Planet', function(){
  it('checks if the planet convert age method successfully converts a users age to that of a particular planet', function(){
    var joel = new Person ("Joel", 36, "male");
    var mercury = new Planet("Mercury", .24);
    var venus = new Planet("Venus", .62);
    var mars = new Planet("Mars", 1.88);
    var jupiter = new Planet ("Jupiter", 11.86);
    expect(mercury.calcUserAge(joel)).toEqual(150);
    expect(venus.calcUserAge(joel)).toEqual(58.1);
    expect(mars.calcUserAge(joel)).toEqual(19.1);
    expect(jupiter.calcUserAge(joel)).toEqual(3);
  });
});

describe ('SolarSystem', function(){
  it('checks if getPlanet method successfully retrieves planet from solar system array', function(){
    var sol = new SolarSystem();
    expect(sol.getPlanet("Saturn")).toEqual(sol.system[5]);
  });
});

describe ('Planet', function(){
  it('checks if the planet convert age remainder method successfully converts a users remaining life to that of a particular planet', function(){
    var joel = new Person ("Joel", 36, "male");
    var mars = new Planet("Mars", 1.88, 4);
    expect(mars.calcYearsRemaing(joel)).toEqual("you have 21.8 years left on Mars");
  });
});

describe ('Planet', function(){
  it('checks if the planet convert age remainder method successfully converts a users remaining life to that of a particular planet if that user is over their life expectancy', function(){
    var joel = new Person ("Joel", 85, "male");
    var mars = new Planet("Jupiter", 11.86, 5);
    expect(mars.calcYearsRemaing(joel)).toEqual("you are 0.7 years past due on Jupiter");
  });
});
