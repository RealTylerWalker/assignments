// 1) Turn an array of numbers into a total of all the numbers

const numbers = [1, 2, 3];

let numTotal = numbers.reduce(function (final, number) {
  final += number;
  return final;
});
console.log(numTotal);

// 2) Turn an array of numbers into a long string of all those numbers.

const numbers2 = [1, 2, 3, 4, 5];

let numberToString = numbers2.reduce(function (final, currentNumber) {
  return final + currentNumber;
}, ``);
console.log(numberToString);

// 3) Turn an array of voter objects into a count of how many people voted: TIP: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.

const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

let totalVoters = voters.reduce(function (final, voter) {
  if (voter.voted) {
    final++;
  }
  return final;
}, []);
console.log(totalVoters);

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

let totalPrice = wishlist.reduce(function (final, item) {
  return (final += item.price);
}, 0);
console.log(totalPrice);

// 5) Given an array of arrays, flatten them into a single array: TIP: TAKE A LOOK AT ARRAY.CONCAT() TO HELP WITH THIS ONE

let arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const allArrays = arrays.reduce(function (final, array) {
  return (final += array.concat());
}, []);
console.log(allArrays);
