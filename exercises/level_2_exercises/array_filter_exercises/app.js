// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
const numbers = [2, 3, 7, 1, 8, 38];

let fiveOrGreater = numbers.filter((number) => number >= 5);
console.log(fiveOrGreater);

// 2) Given an array of numbers, return a new array that only includes the even numbers.
const numbers1 = [2, 3, 7, 1, 8, 38];

let onlyEvenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(onlyEvenNumbers);

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
const words = ["owl", "peanut", "bean", "whiskers", "cat", "kitty"];

let onlyFiveCharacters = words.filter(function (word) {
  if (word.length >= 5) {
    return word;
  }
});

console.log(onlyFiveCharacters);

//4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const celebrities = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true },
];

let areTheyIlluminati = celebrities.filter(function (person) {
  if (person.member === true) {
    return person.name;
  }
});

console.log(areTheyIlluminati);

//5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const peeps = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];

let canSeeMovie = peeps.filter(function (person) {
  if (person.age >= 18) {
    return true;
  }
});
console.log(canSeeMovie);
