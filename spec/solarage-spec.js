import { Person } from './../src/project.js';


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
    console.log(joel.name, joel.age, joel.lifeRemaining)
    jill.calcExp();
    console.log(jill.name, jill.age, jill.lifeRemaining)
    frank.calcExp();
    console.log(frank.name, frank.age, frank.lifeRemaining)
    expect(joel.lifeRemaining).toEqual(40.9);
    expect(jill.lifeRemaining).toEqual(45.6);
    expect(frank.lifeRemaining).toEqual(43.3);

  });
});
