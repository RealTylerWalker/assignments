peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29,
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13,
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82,
  },
];

let filteredPeople = peopleArray

  .filter(function (person) {
    if (person.age >= 18) {
      return person;
    }
  })
  .sort(function (a, b) {
    return a.lastName.localeCompare(b.lastName);
  })
  .map(function (person) {
    return (
      "<li>" +
      person.firstName +
      " " +
      person.lastName +
      " is " +
      person.age +
      " years old." +
      "</li>"
    );
  });
console.log(filteredPeople);

// const numbers = [1, 3, 5, 2, 90, 20];

// numbers.sort((a, b) => a - b);
// console.log(numbers);

// // numbers.sort(function (a, b) {
// //   return a - b;
// // });
// // console.log(numbers);

// // 2) Sort an array from largest number to smallest

// const otherNumbers = [1, 3, 5, 2, 90, 20];

// otherNumbers.sort((a, b) => b - a);
// console.log(otherNumbers);

// // 3) Sort an array from shortest string to longest

// const stringLengthSort = ["dog", "wolf", "by", "family", "eaten"];

// stringLengthSort.sort((a, b) => a.length - b.length);
// console.log(stringLengthSort);

// // 4) Sort an array alphabetically
// const alphabeticallySort = ["dog", "wolf", "by", "family", "eaten"];

// alphabeticallySort.sort();
// console.log(alphabeticallySort);

// // 5) Sort the objects in the array by age

// const sortByAge = [
//   { name: "Quiet Samurai", age: 22 },
//   { name: "Arrogant Ambassador", age: 100 },
//   { name: "Misunderstood Observer", age: 2 },
//   { name: "Unlucky Swami", age: 77 },
// ];

// sortByAge.sort((a, b) => a.age - b.age);
// console.log(sortByAge);
