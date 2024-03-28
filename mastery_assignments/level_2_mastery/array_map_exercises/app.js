// USING .MAP TO CREATE A NEW ARRAY THAT DOUBLES EACH INDEX OF THE ORIGINAL ARRAY

const numbers = [2, 29, 32, 38, 52];

// const doubleTheNumber = numbers.map(function (number) {
//   return number * 2;
// });
// console.log(doubleTheNumber);

const doubleTheNumberEs6 = numbers.map((number) => number * 2);
console.log(doubleTheNumberEs6);

// USING .MAP TO CREATE A NEW ARRAY THAT TURNS NUMBERS FROM THE ORIGINAL ARRAY INTO STRINGS

const otherNumbers = [2, 8, 0, 5, 12];

// const numbersToStrings1 = otherNumbers.map(function (number) {
//   return number + ``;
// });
// console.log(numbersToStrings1);

const numbersToStringsEs6 = numbers.map((number) => number.toString());
console.log(numbersToStringsEs6);

// USING .MAP TO CAPITALIZE THE FIRST LETTER OF EACH NAME AND MAKE THE REST OF THE CHARACTERS LOWERCASE
const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

let capitalizeFirstLetter = names.map(function (name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
});
console.log(capitalizeFirstLetter);

// USING .MAP TO MAKE AN ARRAY OF STRINGS FROM NAMES IN A PREVIOUS ARRAY

let people = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

// let nameOnly = people.map(function (person) {
//   return person.name;
// });

// console.log(nameOnly);

let nameOnlyEs6 = people.map((person) => person.name);
console.log(nameOnlyEs6);

// USING .MAP TO MAKE AN ARRAY OF STRINGS OF THE NAMES AND WHETHER OR THEY CAN GO SEE THE MATRIX

let moviePeople = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

const canSeeMatrix = moviePeople.map(function (person) {
  if (person.age <= 18) {
    return person.name + ` is old enough to see The Matrix.`;
  } else {
    return person.name + ` is not old enough to see The Matrix`;
  }
});

console.log(canSeeMatrix);

// USING .MAP TO MAKE AN ARRAY OF NAMES IN H1 TAGS AND THE AGES IN H2 TAGS

let otherPeople = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

const namesAndAgesInH1AndH2 = otherPeople.map(function (person) {
  return "<h1>" + person.name + "</h1>" + "<h2>" + person.age + "</h2>";
});
console.log(namesAndAgesInH1AndH2);
