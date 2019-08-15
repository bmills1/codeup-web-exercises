function showMultiplicationTable(x) {
    for (var i = 1; i <= 10; i++) {
        console.log(x + " x " + i + " = " + x * i );

    }
}

showMultiplicationTable(7);



//isevenirodd
for (var x = 1; x <= 10; x++) {
    ///random number 20 - 200
    var random = Math.floor(Math.random() * 181) + 20;
    if (random % 2 === 0) {
        console.log(random + " is even", random);

    } else {
        console.log(random + " is odd", random);
    }
}
var a = 1;
for(var j =1; j<=9; j++){
    console.log(a*j);
    a+="1";
}



for (var i = 100; i>0; i-=5){
        console.log(i);
}
