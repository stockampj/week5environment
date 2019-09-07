import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Planet, SolarSystem, Person} from './project';



$(document).ready(function(){
  const sol = new SolarSystem;

  function displayInfo(planet, user) {
    let ageReturn = planet.calcUserAge(user);
    let returnString = planet.calcYearsRemaing(user);
    $(".planet-name").text(planet.name);
    $("#solar-converter").text(planet.solarConverter);
    $("#age-on-planet").text(ageReturn);
    $("#years-remaining").text(returnString);
  }

  $("#explore").click(function(event){
    event.preventDefault();
    let age = $("#user-age").val();
    let sex = $("#user-sex").val();
    let user = new Person("user", age, sex);
    sol.addPerson(user);
    $("#user-sign-in").slideUp(800);
  });

  $(".planet").click(function(){
    let planet = sol.getPlanet(this.id);
    let user = sol.person;
    displayInfo(planet, user)
    $("#planet-display").fadein(1000);
  })
});
