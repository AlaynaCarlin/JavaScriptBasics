// a string is ANYTHING enclosed in a single or double quotes

console.log("I was born in Indianapolis.");
console.log("I've lived in three states.");
console.log("I like Indiana the best.");
console.log("My bank account had two million bucks in it. It's gone now.");

//we use let, var, or const to create a string variable
var tweet = "Lebron is king! Westbrook for president!";
let facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
const username = 'jamespauloconnor';

// you can use numbers in a string, but you won't be able to do math.
// numbers in quoted are actually text. "2"-text   2-number
let age = "22";
let years = "4";
console.log(age + years);// doesn't add, just puts one in front of the other.
// take  away the quotes around the numbers and it will add. 

// CONCATENATION - adding two or more strings together. a plus sigh is the concatenation operator.
var birthCity = "Auburn";
var birthState = "Indiana";

console.log(birthCity + "," + birthState);

// we can mix strings and numbers togehter. when you do this,
// JavaScript turns numbers into strings. this is known as COERCION.
let ageInAugust = 18;
let highschool = "home :>";
let graduatedHighSchool = 2021;
const commaWithSpace = ", ";

console.log(highschool + commaWithSpace + graduatedHighSchool);
console.log("My age in August:", ageInAugust);

let gradYear = 2021;
let highSchool = "Carlin Christian Academy";

console.log("I graduated from " + highSchool + " in " + gradYear + " at the age of seventeen.");

// Length - returns the length of a string (including spaces)[tells us how ling it is]
console.log(highSchool.length);

// lower or upper case
console.log(highSchool.toUpperCase());//everything upper case
console.log(highSchool.toLowerCase());// everything lower case

// splits the string into an array on each space
console.log(highSchool.split(" "));// the space in the quotes specifies that the substrings are created at each space

// Extracts from highSchool[0] to and including highSchool [11]
console.log(highSchool.slice(0,24));//only shows the incriments specified in the parameters.
