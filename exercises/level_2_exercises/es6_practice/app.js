const name = "John";
let age = 101;

function runForLoop(pets) {
  let petObjects = [];
  for (let i = 0; i < pets.length; i++) {
    let pet = { type: pets[i] };
    let name;
    if (pets[i] === "cat") {
      name = "fluffy";
    } else {
      name = "spot";
    }
    console.log("pet name: ", name);
    pet.name = name;
    petObjects.push(pet);
  }
  console.log("man name: ", name);
  return petObjects;
}

runForLoop(["cat", "dog"]);

//

const carrots = ["bright orange", "ripe", "rotten"];

const mapVegetables = (arr) =>
  arr.map((carrot) => ({ type: "carrot", name: carrot }));

console.log(mapVegetables(carrots));

//

const people = [
  {
    name: "Princess Peach",
    friendly: false,
  },
  {
    name: "Luigi",
    friendly: true,
  },
  {
    name: "Mario",
    friendly: true,
  },
  {
    name: "Bowser",
    friendly: false,
  },
];

const filterForFriendly = (arr) => arr.filter((person) => person.friendly);

console.log(filterForFriendly(people));

//

const doMathSum = (a, b) => a + b;
console.log(doMathSum(23, 59));

const produceProduct = (a, b) => a * b;
console.log(produceProduct(3, 13));

const printString = (firstName, lastName, age) =>
  `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;

console.log(printString("Kat", "Stark", 40));
