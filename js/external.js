"use strict";
////////////////////////* Welcome Message*/////////////////////
console.log('Hello from external Javascript!');
alert('Welcome to my Website!');
///////////////////////* Favorite Color*//////////////////////
var usersFavoriteColor = prompt ("What is your favorite color?");
alert(" Your favorite color is " + usersFavoriteColor + "! Nice! " + usersFavoriteColor +  " is my favorite color too!");
//////////////////////* Movie Rental Example *////////////////
var littleMermaidDaysRented = prompt ("How many days did you rent The Little Mermaid?");
alert("You rented The Little Mermaid for " + Number(littleMermaidDaysRented) + " days.");

var brotherBearDaysRented = prompt ("How many days did you rent Brother Bear?");
alert("You rented Brother Bear for " + Number(brotherBearDaysRented) + " days.");

var herculesDaysRented = prompt ("How many days did you rent Hercules?");
alert("You rented Hercules for " + Number(herculesDaysRented) + " days.");

var rentalTotalDays = (Number(littleMermaidDaysRented) + Number(brotherBearDaysRented) + Number(herculesDaysRented));
var pricePerDayDollars = 3;
var rentalTotalPrice = pricePerDayDollars * (Number(littleMermaidDaysRented) + Number(brotherBearDaysRented) + Number(herculesDaysRented));

alert("You rented for a total of " + Number(rentalTotalDays) + ". The rental price is $3 per day.")
alert("Your total rental price is $" + Number(rentalTotalPrice.toFixed(2)));

/////////////////////////* Calculating Wages Example *///////////////////////
var amazonHourlyPayDollars = prompt ("How much money do you make per hour at Amazon?");
alert("You make $" + Number(amazonHourlyPayDollars) + " per hour at Amazon.");

var googleHourlyPayDollars = prompt ("How much money do you make per hour at Google?");
alert("You make $" + Number(googleHourlyPayDollars) + " per hour at Google.");
var facebookHourlyPayDollars = prompt ("How much money do you make per hour at Facebook?");
alert("You make $" + Number(facebookHourlyPayDollars) + " per hour at Facebook.");


var amazonHoursWorked = prompt ("How may hours did you work at Amazon this pay period?");
alert("You worked " + Number(amazonHoursWorked) + " hours at Amazon this pay period.");
alert ("This pay period you worked " + amazonHoursWorked + " hours at Amazon at a rate of $" + amazonHourlyPayDollars + " per hour.");
alert ("Your total pay for Amazon this pay period is $" + (Number(amazonHoursWorked) * Number(amazonHourlyPayDollars)));

var googleHoursWorked = prompt ("How may hours did you work at Google this pay period?");
alert("You worked " + Number(googleHoursWorked) + " hours at Google this pay period.");
alert ("This pay period you worked " + googleHoursWorked + " hours at Google at a rate of $" + googleHourlyPayDollars+ " per hour.");
alert ("Your total pay for Google this pay period is $" + (Number(googleHoursWorked) * Number(googleHourlyPayDollars)));


var facebookHoursWorked = prompt ("How may hours did you work at Facebook this pay period?");
alert("You worked " + Number(facebookHoursWorked) + " hours at Facebook this pay period.");
alert ("This pay period you worked " + facebookHoursWorked + " hours at Facebook at a rate of $" + facebookHourlyPayDollars + " per hour.");
alert ("Your total pay for Facebook this pay period is $" + (Number(facebookHoursWorked) * Number(facebookHourlyPayDollars)));

var combinedTotalDollars = (Number(amazonHoursWorked) * Number(amazonHourlyPayDollars)) + (Number(googleHoursWorked) * Number(googleHourlyPayDollars)) + (Number(facebookHoursWorked)* Number (facebookHourlyPayDollars));

alert ("Your combined total pay for this pay period is $" + combinedTotalDollars.toFixed(2));


///////////////* Class Registration Example *////////////////
var classNotFull = true;
var noConflict = true;
var currentSchedule = true;
var register = classNotFull && (noConflict && currentSchedule);
confirm ("Can you register for class?");
alert(register === true? "Yes":"No");


//////////////* Offer Example*//////////////////
var numberOfItems = prompt ("How many items do you have?"); // number
var offerIsValid = confirm ("Offer is valid:"); // boolean
var isPremiumMember = confirm ("Are you a premium member?"); // boolean
var productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);
alert (productDiscountApplied === true? "Yes": "No");





