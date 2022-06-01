//A function is a block of code created by the programmer.
// The function performs a task and often returns a value, but not always.

// hey! here's a thing you can do!!(function) but not till I tell you to.(call or invoke)
function hello () {
    console.log("hello World!") // declares the function
}
hello(); // invokes the function

function pacersWon(){
    console.log("Pacers won!!");
}
pacersWon();
pacersWon();

// declare it//           Parameters are the names listed in the parentheses of the function definition
function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}
// call it//
subtractTwoNumbers(5, 7); // Arguments are the real values received by the function when you call it.

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250,91)); 

function sumOfNumbers(numOne, numTwo){
    let sum = numOne + numTwo;
    return sum;
}
console.log(sumOfNumbers(34,45));

function names(firstName, secondName){
    let fullName = firstName+""+ secondName;
    return fullName;
}
console.log(names("Alayna, Carlin " ));
 
function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice;
}
console.log(calculatePriceIndiana(2,56));
