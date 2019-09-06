"use strict";

// - Make a function named isNumeric(input) that returns if the input is a number like 5 or 2.3 or a string containing only a number like "2". Example isNumeric(3) is - true. isNumeric("banana") should return false.
function isNumeric(input){
    if (isNaN(input)|| input === undefined || input === null) {
        return false;
    }else {
        return true;
    }
}
// console.log(isNumeric("5"));
// - Make a function named isEqual(input1, input2) that returns if both inputs have the same value. areEqual
function isEqual(input1, input2){
    if(input1 == input2){
        return true;
    }else{
        return false;
        }
}
// console.log(isEqual(1, "4"));
// - Make a function named isIdentical(input1, input2) that returns if both inputs are same value and data type.
function isIdentical (input1, input2){
    if(input1 === input2){
        return true;
    }else{
        return false;
    }
}
// - Make a function named not(input) returns the input with a flipped boolean
function not(input){
    if(input === true){
        return false;

    }else if (input === false){
        return true;
    }
}
// console.log(not(isNumeric("dog")));
// - Make a function named isOdd(number) that returns true if the number is odd
function isOdd(input){
    if(input % 2 === 0){
        return false;
    }else{
        return true;
    }
}
// console.log(isOdd(5));

// - Make a function named isEven(number) that returns true if the number is even or zero

function isEven(input){
    if(input % 2 === 0){
        return true;
    }else{
        return false;
    }
}
// console.log(isEven(5));

// - Make a function named isPositive(number) that returns true if the provided input is a positive number. False for zero or any other number or data type.
function isPositive(number){
    if(!isNumeric(number)|| number === null || number === 0){
        return false;
    }else{
        return true;
    }
}
// console.log(isPositive(0));

// - Make a function named isNegative(number) that returns true if the provided input is a negative number. False for zero or any other number or data type.
function isNegative(number){
    if(!isNumeric(number) || number >= 0){
        return false;
    }else {
        return true;
    }
}
// console.log(isNegative("putt"));

// - Make a function named identity(input) that returns the input exactly as provided.
function identity(input){
    return input;
}
// console.log(identity("Ceres"));
// - Make a function named isFive(input)
function isFive(input){
    if(input == 5){
        return true;
    }else {
        return false;
    }
}
// console.log(isFive(5));
// - Make a function named addFive(input) that adds five to some input.
function addFive(input){
    return parseFloat(input) + 5;
}
// console.log(addFive(4));
// - Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input){
    if(input % 5 === 0){
        return true;
    }else{
        return false;
    }
}
// console.log(isMultipleOfFive("dog"));
// - Make a function named isThree(input)
function isThree(input){
    if(input ==3){
        return true;
    }else{
       return false;
    }
}
// console.log(isThree(3));
// - Make a function named isMultipleOfThree(input)
function isMultipleofThree(input){
    if(input % 3 === 0){
       return true;
    }else{
        return false;
    }
}
// console.log(isMultipleofThree(96));
// - Make a function named isMultipleOfThreeAndFive(input)
function isMultipleofThreeAndFive(input){
    if(isMultipleofThree(input) && isMultipleOfFive(input)){
        return true;
    }else{
        return false;
    }
}
// console.log(isMultipleofThreeAndFive("30"));
// - Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n){
    if(target % n === 0){
        return true;
    }else{
        return false;
    }
}
// console.log(isMultipleOf(28, 4));
// - Make a function named isTrue(boolean)
function isTrue(boolean){
    return boolean === true || boolean === false;
}
// console.log(isTrue(false));
// - Make a function named isFalse(boolean)
function isFalse(boolean){
        return boolean === !true || boolean === !false;
}
// console.log(isFalse(true));
// - Make a function named isTruthy(input) // remember that values other than true will behave like true. you may need to lookup truthy/falsy values in JavaScriptf
function isTruthy(input){
    if(input === false || input === 0 || input === "" || input === null || input === undefined || isNaN(input)){
        return false;
    }else{
        return true;
    }
}
// console.log(isTruthy("dog"));
// - Make a function named isFalsy(input) // remember that values other than false behave like false
function isFalsy(input){
    if(input === false || input === 0 || input === "" || input === null || input === undefined || isNaN(input)){
        return true
    }else{
        return false;
    }
}
// console.log(isFalsy(7));
// - Make a function named isVowel(letter)
function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) !== -1;
}
// console.log(isVowel("E"));
// - Make a function named isConsonant(letter)
function isConsonant(letter) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) === -1;
}
// console.log(isConsonant("a"));
// - Make a function named isCapital(letter)
function isCapital(letter){
    if(letter === letter.toUpperCase()){
        return true;
    }else{
        return false;
    }
}
// console.log(isCapital("A"));
// - Make a function named isLowerCase(letter)
function isLowerCase(letter){
    if(letter === letter.toLowerCase()){
     return true;
    }else{
        return false;
    }
}
// console.log(isLowerCase("c"));
// - Make a function named hasLowerCase(string) that returns if a string has any lower cased
function hasLowerCase(string){
    for(var x = 0; x<string.length; x++){

    }
}

// console.log(hasLowerCase("Text"));
function hasLowerCase(input){


}
// - Make a function named isSpace(letter) that returns if a character is a space character
// - Make a function named isZero(number)

function isZero(number){
    if(number == 0){
        return true;
    }else{
        return false;
    }
}
// console.log(isZero(0));
// - Make a function named notZero(input) that returns true if the input is any number except for zero.
function notZero(input){
 if(isNumeric(input) && input != 0){
     return true;
 }else{
     return false;
 }
}
// console.log(notZero(-7));
// - Write a function named lowerCase(string)
// - Write a function named double(n) that returns a number times two
function double(n){
    if(isNumeric(n)) {
        return n * 2;
    }else{
        return false;
    }
}
// console.log(double("8"));
// - Write a function named triple(n) that returns a number times 3
function triple(n) {
    if (isNumeric(n)) {
        return n * 3;
    } else {
        return false;
    }
}
// console.log(triple(10));
// - Write a function named quadruple(n) that returns a number times 4
function quadruple(n){
    if(isNumeric(n)){
        return n *4;
    }else{
        return false;
    }
}
// console.log(quadruple(2));
// - Write a function named half(n) that returns 1/2 of the provided input
function half(n){
    if(isNumeric(n)){
        return n / 2;
    }else{
        return false;
    }
}
// console.log(half(8));
// - Write a function named subtract(a, b) that returns a minus b
function subtract(a, b){
    if(isNumeric(a) && isNumeric(b)){
        return a - b;
    }else{
        return false;
    }
}
// console.log(subtract(-2, 8));
// - Write a function named multiply(a, b) that returns the product of a times b
function multiply(a, b){
    if(isNumeric(a) && isNumeric(b)){
        return a * b;
    }else{
        return false;
    }
}
// console.log(multiply(100, 100));
// - Write a function named divide(a, b) that returns a divided by b
function divide(a, b){
    if(isNumeric(a) && isNumeric(b)){
        return a / b;
    }else{
        return false;
    }
}
// console.log(divide(8, 3));
// - Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remainder(a, b){
    if(isNumeric(a) && isNumeric(b)){
        return a - Math.floor(a/b)*b;
    }else{
        return false;
    }
}
// console.log(remainder(8, 7));
// - Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
function modulo(a, b){
    if(isNumeric(a) && isNumeric(b)){
       return a % b;
    }else{
        return false;
    }
}
// console.log( modulo(9,3));
// - Write a function named cube(n) that returns n * n * n
function cube(n){
    if(isNumeric(n)){
        return Math.pow( n, 3);
    }else{
        return false;
    }
}
// console.log(cube(2));
// - Write a function named squareRoot(n) that returns the square root of the input
function squareRoot(n){
    if(isNumeric(n)){
        return Math.sqrt(n);
    }else{
        false;
    }
}
// console.log(squareRoot(36));
// - Make a function named absoluteValue(number) that returns the absolute value of a number.
function absoluteValue(number){
    if(isNumeric(number)){
      return Math.abs(number)
    }else{
    return false;
    }
}
// console.log(absoluteValue(-4));
// - Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.

function isBlank(input){
    if(input.trim.length===0 ){
        return true;
    }else{
        return false;
    }
}
// console.log(isBlank("hhh"));
// - Write a function named cubeRoot(n) that returns the cube root of the input
function cubeRoot(n){
    if(isNumeric(n)){
        return Math.cbrt(n);
    }else{
    return false;
    }
}
// - Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
function invertSign(number){
    if(isNumeric(number) && number != 0){
        return -1 * (number);
    }else{
        return false;
    }
}
// console.log(invertSign(144));
// - Write a function named degreesToRadians(number)
function degreesToRadians(number){
    if(isNumeric(number)){
        var pi = Math.PI;
        return number * (pi/180);
    }else{
        return false;
    }
}
// console.log(degreesToRadians(180));
// - Write a function named radiansToDegrees(number)
function radiansToDegrees(number){
    if(isNumeric(number)){
        var pi = Math.PI;
        return number * (180/pi);
    }else{
    return false;
    }
}
// console.log(radiansToDegrees(0.7853981633974483));
// - Make a function named trim(string) that removes empty spaces before and after the input.
function trim(string){
  var str = string.toString();
  return str.trim();
}
// console.log(trim("   Hello World        "));
// - Make a function named notNot(input) that the negation of the negation of the input.
function notNot(input){

}
    

// - Make a function named and(predicate1, predicate2) that returns the logical operation of AND

function and(predicate1, predicate2){
    return predicate1 && predicate2;
}
// console.log(and("this", "that"));
// - Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// - Write a function called reverseString(string) that reverses a string
// - Make
// console.log(10 % 3);
// console.log(0);
// console.log("");
var array = ['John', 'Paul', 'George', 'Ringo', 'Santana'];
console.log(array[2]);
console.log(array[array.length - 3]);
// console.log(parseInt("1") + 2);//
// a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and - including the number of sides.