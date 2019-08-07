(function(){

"use strict";

// //*if statement*//

var isRaining = true;
if (isRaining){

    alert  ("Yea, it's raining!");
}

var numberOfLives = 0;
if(numberOfLives === 0){
    alert ("Game Over!");
}


////////////*if else statement*/////////////////////

var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
    console.log("The value of the confirm is " + weShouldDeleteStuff);

    if (weShouldDeleteStuff) {
        alert ("We are deleting everything...")
    // delete all the things...
} else {
    alert("Operation Canceled!");
}
var walkingToday = confirm("Are we walking today?") ;
    console.log(walkingToday);
if(walkingToday){
    alert ("Yep, walking today.")


} else {
    alert ("Guess I'm driving.")

}
/* if else if else */
if(condition){

} else if {

} else {

    }

var pizzaPreference = prompt("What kind of pizza do you like?");
    console.log("User input" + pizzaPreference)
if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");
}
///////////////////* if else inside of a function*/////////////////////////////
    var lightColor = prompt ("What color is the traffic light?");
    console.log("The traffic light is " + lightColor);

    function evaluateTrafficLightColor(lightColor) {
    if (lightColor === "green"){
        alert ("Go as fast as you can!");

    } else if (lightColor === "yellow"){
        alert ("Slow down, get ready to stop");

    } else if (lightColor === "red"){
        alert ("STOP!!");
    } else {
        alert ("STOP until you figure it out!");
        }
}
    evaluateTrafficLightColor(lightColor);
/* Ternary*/
    'use strict';
    var success = false;
    var message;

    // if (success) {
    //     message = "Operation was successful.";
    // } else {
    //     message = "Oops, something went wrong.";
    // }

// ternary //
(success) ? "Operation was successful." : "Oops, something went wrong.";

// the above if/else can be re-written as:
    var message = (success) ? "Operation was successful." : "Oops, something went wrong.";

    console.log(message);

/* Switch Statements*/

var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}




})();