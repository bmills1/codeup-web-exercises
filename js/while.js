var num = 2;
while (num <= 65536) {
    console.log(num);
    num *= 2;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var customerCones = Math.floor(Math.random() * 5) + 1;

console.log("All cones " + allCones);
console.log("Customer Cones " + customerCones);

do {

//continue selling
    if (allCones >= customerCones) {
        console.log("Great, I can sell you, " + customerCones + " I still have " + allCones + " left to sell!")
    } else {
        console.log("I can't sell you " + customerCones + " cones, I only have " + allCones + " left.");
        customerCones = allCones;
    }

    //number of cones left after a cones are sold
    allCones = allCones - customerCones;

    // how number of cones the new customer wants is calculated.
    customerCones = Math.floor(Math.random() * 5) + 1;

} while (allCones > 0);
console.log("I sold them all!");



