
// function allOddNumbersTo50 (){
//     do{
//       var i = prompt ("Please enter an odd number between 1-50.");
//     }while(i % 2 !== 0){
//         console.log("This is not an odd number");
//
//     } if(i % 2 === 0){
//         console.log("Thanks for the odd number");
//     }
// }
// allOddNumbersTo50();


// Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.
var userInput;
do {
    userInput = prompt("Please enter an odd number between 1 and 50");
} while(userInput % 2 === 0 || !(userInput <=50 && userInput >=1));
//  Use a loop and continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
for(var i = 1; i<=50; i+=2){
    if(i === +userInput){
        console.log("Yikes! Skipping number: " + userInput);
        continue;
    }
    console.log("Here is an odd number: " + i);

}
//Odd numbers to 50

for(var i = 1; i < 50; i+=2) {
    if (num === i) {
        console.log("Whoops! Skipping " + num);
        continue;
    }
    console.log(i);
}