// 1) Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

// Starting Example:
// function collectAnimals(/*your code here*/) {
//   /*and here*/
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

const collectAnimals = (...animals) => animals;

console.log(collectAnimals("platypus", "dog", "cat", "mouse", "jackolope"));

// 2) Write a function that returns a food object with the array names as properties.
// You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned
// twice in both the name and value of properties in your object:

// starting example

// function combineFruit(fruit, sweets, vegetables){
//   return {}
// }

// combineFruit(["apple", "pear"],
//            ["cake", "pie"],
//            ["carrot"])
//=> {
//     fruit: ["apple", "pear"],
//     sweets: ["cake", "pie"],
//     vegetables: ["carrot"]
//  }

const combineFruit = (fruit, sweets, vegetables) => ({
  fruit,
  sweets,
  vegetables,
});

console.log(
  combineFruit(["apple", "pear"], ["cake", "pie"], ["carrots", "brocolli"])
);

// 3) Use destructuring to use the property names as variables. Destructure the object in the parameter:

// Starting Example

// function parseSentence(_________){
//   return `We're going to have a good time in ${location} for ${duration}`
// }

// parseSentence({
//   location: "Burly Idaho",
//   duration: "2 weeks"
// });

const parseSentence = (location, duration) =>
  `We are going to have a good time in ${location} for ${duration}`;
console.log(parseSentence("Burley, Idaho", "2 weeks"));

// 4) Use array destructuring to make this code ES6:

// Starting Example

// function returnFirst(items){
//   const firstItem = items[0]; /*change this line to be es6*/
//   return firstItem
// }

// const returnFirst = ([a, b, c]) => items;

// const numbersArray = [3, 5, 6];
// const [a, b, c] = numbersArray;

// console.log(a, b, c);
// console.log(numbersArray);

const returnFirst = ([firstItem]) => firstItem;

console.log(returnFirst(["apple", "banana", "orange"]));

// 5) Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// Starting Example

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
// your code here
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
// }

// returnFavorites(favoriteActivities)

const favoriteActivities = [
  "magnets",
  "snowboarding",
  "philanthropy",
  "janitor work",
  "eating",
];

const returnFavorites = ([a, b, c]) =>
  `My top three favorite activities are ${a}, ${b}, and ${c}`;
console.log(returnFavorites(favoriteActivities));

// 6) Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to
// change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// Starting Example

// function combineAnimals() {

// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// finished product ["dog", "cat", "mouse", "jackolope", "platypus"]

const combineAnimals = (...arrays) =>
  arrays.reduce((combinedArray, array) => [...combinedArray, ...array], []);

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// 7) Try to make the following function more ES6y:

// starting example

// function product(a, b, c, d, e) {
//   var numbers = [a, b, c, d, e];

//   return numbers.reduce(function (acc, number) {
//     return acc * number;
//   }, 1);
// }
// console.log(product(2, 2, 2, 2,));

const product = (...numbers) =>
  numbers.reduce((combinedArray, numbers) => combinedArray * numbers, 1);
console.log(product(2, 2, 2, 2, 2));

// 8) Make the following function more ES6y. Use at least both the rest and spread operators:

// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

// console.log(unshift(["hello", "what's up?"], 2, 2, 2, 2, 2));

const unshift = (array, ...elements) => [...elements, ...array];
console.log(unshift(["hello", "what's up?"], 2, 2, 2, 2, 2));

// 9)
// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
// your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])

const populatePeople = (names) =>
  names.map((name) => {
    const [firstName, lastName] = name.split(" ");
    return { firstName, lastName };
  });

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
