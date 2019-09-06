import { Person, Planet } from './../src/project.js';


describe ('Person', function(){
  it('checks if Person objects age is being held by object', function(){
    var joel = new Person ("Joel", 36, "male");
    expect(joel.age).toEqual(36)
    expect(joel.name).toEqual("Joel")
    expect(joel.sex).toEqual("male")
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
    expect(joel.lifeRemaining).toEqual(40.9);
    expect(jill.lifeRemaining).toEqual(45.6);
    expect(frank.lifeRemaining).toEqual(43.3);
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
