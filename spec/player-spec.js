import { Person } from './../src/project.js';


describe ('Person', function(){
  it('checks if Person objects age is being held by object', function(){
    var joel = new Person ("Joel", 36, "male");
    expect(joel.age).toEqual(36)
    expect(joel.name).toEqual("Joel")
    expect(joel.sex).toEqual("male")
  });
});
