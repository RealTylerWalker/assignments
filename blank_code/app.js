// Code Challenge

// Given a string, return true or false whether every character is capitalized

// Constraints:
// 1) Assume string only contains letters A-Z and a-z
// 2) Assume string length is >= 0

// const isUpperCase = (str) => str === str.toUpperCase();

const isUpperCase = (str) => {
  if (str === "") {
    console.log("You need to type something");
    return false;
  }
  if (str === str.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};
console.log(isUpperCase());

//examples:
// isUpperCase("ABC") --> true
// isUpperCase("Abc") --> false
// usUpperCase("aBcD") --> false
