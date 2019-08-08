"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 */


function numberPlus100(numEntered) {
    return +numEntered + 100;

}


function userNumberProperties() {

    var numWanted = confirm("Would you like to enter a number?");

//If the user wants to enter a number continue to following:
    if (numWanted) {
//Ask the user for the number they want to enter
        var numEntered = prompt("Please enter your number.");
        var evenOddMsg = (numEntered) ? "This number is even": "This number is odd" ;
        var posNegNumMsg = (numEntered)? "This number is positive":"This number is even";
//If the user does not enter a valid number
        if (isNaN(+numEntered)) {
            alert("This is not a valid number!" + numEntered);
        } else {
// If the user does enter a valid number
//is this an Even or Odd number entered
            if (numEntered % 2 === 0) {
                evenOddMsg = "This is an even number";
            } else {
                evenOddMsg = "This is an odd number";
            }
            alert(evenOddMsg);
//Number entered plus one hundred
            alert("If you add 100 to the number you entered it will be " + numPlus100(numEntered));
//Is this a Positive or negative number entered
            if (numEntered > 0) {
                posNegNumMsg = "This is a positive number";
            } else {
                posNegNumMsg = " This is a negative number";
            }
            alert(posNegNumMsg);
        }
    }
}
//Call function
userNumberProperties();


/*
* - whether the number is even or odd
* - what the number plus 100 is
* - if the number is negative or positive
*
* if what the user enters is not a number, use an alert to tell them that, and
* do *not* display any of the above information.
*
* Can you refactor your code to use functions?
*/

//Function to tell if number is even or odd
function numEvenOrOdd(numEntered){
    return (numEntered % 2 === 0)?'The number '+ numEntered + ' is even': 'The number '+ numEntered + ' is odd';
}
//Function to tell if number is positive or negative
function numPosOrNeg(numEntered){
    return (numEntered > 0) ? 'The number '+ numEntered + ' is positive':'The number '+ numEntered + ' is negative';
}
//Function to add number to 100
function numPlus100(numEntered) {
    return +numEntered + 100;

}


function describeNum(){
    if( confirm("Would you like to enter a number?")){
        var numEntered = prompt("Please enter a number");
        if (isNaN(+numEntered)){
            alert(numEntered + ' is not a number');
        } else {
            alert(numEvenOrOdd(+numEntered));
            alert("The number you entered plus 100 is " + numPlus100(+numEntered));
            alert(numPosOrNeg(+numEntered));
        }

    }

}

describeNum();



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


// function analyzeColor(userColorEntered) {
//     if (userColorEntered === "red") {
//         return "Some apples are red.";
//
//     } else if (userColorEntered === "orange") {
//         return "Some pumpkins are orange.";
//
//     } else if (userColorEntered === "yellow") {
//         return "Bananas are yellow";
//
//     } else if (userColorEntered === "green") {
//         return "The grass is green";
//     } else if (userColorEntered === "blue") {
//         return "The sky is blue";
//     } else if (userColorEntered === "indigo") {
//         return "indigo is a pretty shade of purple";
//
//     } else if (userColorEntered === "violet") {
//         return "violet is another shade of purple";
//
//     } else {
//         return "We don't have this color.";
//
//     }
//
// }

//Test Cases

console.log(analyzeColor('red'));
console.log(analyzeColor('blue'));
console.log(analyzeColor('cyn'));

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(analyzeColor(randomColor), randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(userColorEntered) {
    switch (userColorEntered) {
        case "red":
            return "Some apples are red.";
        case "orange":
            return "Some pumpkins are orange.";
        case "yellow":
            return "Bananas are yellow.";
        case "green":
            return "The grass is green.";
        case "blue":
            return "The sky is blue.";
        case "indigo":
            return "indigo is a pretty shade of purple.";
        case "violet":
            return "violet is another shade of purple.";
        default:
            return "A color we don't have.";

    }

}

//Test
console.log(analyzeColor('red'));
console.log(analyzeColor('blue'));
console.log(analyzeColor('cyn'));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userColorEntered = prompt("Please enter in a color name.")
// alert("You entered the color" + " " + userColorEntered + "." + " " + analyzeColor(userColorEntered));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 *
 *
 * if luckyNum === 0 discount is 0%
 * if luckyNum === 1 discount is 10%
 * if luckyNum ===2 discount is 25 %
 * if luckyNum ===3 discount is 35%
 * if luckyNum === 4 discount is 50%
 * if luckyNum === 5 discount is 100%
 * 2 inputs number and total amount
 * 1 output discounted price
 */
var discountTotal;

function calculateTotal(luckyNumber, totalAmount) {
    switch (luckyNumber) {
        case 0:
            discountTotal = totalAmount - (0);
            return discountTotal;
        case 1:
            discountTotal = totalAmount - (totalAmount * 10 / 100);
            return discountTotal;
        case  2:
            discountTotal = totalAmount - (totalAmount * 25 / 100);
            return discountTotal;
        case 3:
            discountTotal = totalAmount - (totalAmount * 35 / 100);
            return discountTotal;
        case 4:
            discountTotal = totalAmount - (totalAmount * 50 / 100);
            return discountTotal;
        case 5:
            discountTotal = totalAmount - (totalAmount * 100 / 100);
            return discountTotal;

    }

}

console.log(calculateTotal(0, 100), 100);
console.log(calculateTotal(4, 100), 50);
console.log(calculateTotal(5, 100), 0);
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBillAmount = prompt("What is your total bill amount?");
alert("Your total price before discount is $" + totalBillAmount);
alert("Your total price after discount is $" + calculateTotal(luckyNumber, totalBillAmount));
console.log(calculateTotal(luckyNumber, totalBillAmount), luckyNumber);
