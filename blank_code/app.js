const numbers = [2, 3, 5, 6, 7, 23];

const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

const numbersToStrings = [2, 3, 5, 6, 7, 23];

const stringItUp = numbersToStrings.map((arr) => {
  return arr.toString();
});
console.log(stringItUp);

const people = [
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

const onlyNames = people.map((person) => person.name);
console.log(onlyNames);
