// function upperAndLowercaseString(inputString){
//   console.log(inputString.toUpperCase() + inputString.toLowerCase())
// }
// upperAndLowercaseString("Hello");

// function halfOfLengthString(inputString){
// var stringLength = inputString.length;
// var halfOfString = Math.floor(stringLength / 2)
// console.log(halfOfString);
// }
// halfOfLengthString("Hello, world!");

// function returnFirstHalfString(inputString){
//   var middleIndex = Math.ceil(inputString.length / 2);
//   var halfOfString = inputString.slice(0, middleIndex);
//   return halfOfString;
  
// }
// var result = returnFirstHalfString("Hello World");
// console.log(result)

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

// > Hint: If your string length is odd, use Math.floor() to round down.

// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

function firstHalfCap(inputString){
  var middleIndex = Math.floor(inputString.length / 2);
  var firstHalfOfString = inputString.toUpperCase().slice(0, middleIndex);
  var secondHalfOfString = inputString.toLowerCase().slice(middleIndex)
  return firstHalfOfString + secondHalfOfString;
  
}
var result = firstHalfCap("Hello World");
console.log(result)