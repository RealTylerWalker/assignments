const readline = require("readline-sync");
const playerName = readline.question(
  "Hello there, you must be quite the intrepid traveler to venture into these woods, what is your name? "
);
console.log(`Welcome to the land of Intrepidshire, ${playerName}!`);
let isGameRunning = true;

class character {
  constructor(name, healthPoints, attackPoints, inventory) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
    this.inventory = inventory;
  }
  printInventory() {
    console.log(`Name: ${this.name}`);
    console.log(`Inventory: ${this.inventory}`);
  }
}

let heroWeaponInventory = ["nothing"];

const hero = new character(playerName, 100, 5, heroWeaponInventory);
const badGuy1 = new character("Tommy 'The Rugrat' Pickels", 45, 5, [
  "reusable diaper",
  "safety pin",
  "resourcefulness",
]);
const badGuy2 = new character("Danger Nate", 100, 8, [
  "Gold Tooth",
  "Swiss Army Knife",
  "brass knuckles",
]);
const badGuy3 = new character("Wreck-it-Ralph", 100, 10, [
  "hands the size of frying pans",
  "Magic Hammer",
  "bricks",
]);

let enemies = [badGuy1, badGuy2, badGuy3];

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

while (isGameRunning) {
  let action = readline.question(
    `What would you like to do? Press [w] to walk, [i] to see your inventory, or [hk] for something unexpected: `,
    { limit: ["w", "i", "hk"] }
  );
  if (action === "i") {
    console.log(`Items in your possession: ${heroWeaponInventory}`);
  }
  if (action === "w") {
    console.log("You chose to walk:");
    let enemyChance = getRandomNumber(1, 4);
    if (enemyChance === 3) {
      let randomEnemyIndex = getRandomNumber(0, enemies.length - 1);
      let currentEnemy = enemies[randomEnemyIndex];
      console.log("");
      console.log(`${currentEnemy.name} has appeared! `);
      const enemyOptions = ["Fight!", "Retreat!", "Something unexpected!"];
      let fightAction = readline.keyInSelect(
        enemyOptions,
        "What would you like to do?"
      );

      if (fightAction === -1) {
        doNothing();
        continue;
      } else if (fightAction === 0) {
        fight();
      } else if (fightAction === 1) {
        retreat();
        continue;
      } else if (fightAction === 2) {
        somethingUnexpected();
        isGameRunning = false;
      } else {
        console.log("Invalid option selected.");
      }
    } else {
      console.log(
        "You narrowly avoided detection by an enemy...well done, intrepid traveler!"
      );
    }
  }
  if (action === "hk") {
    console.log(
      `You chose hari-kari, remove your sword and insert into abdomen. Goodbye!`
    );
    isGameRunning = false;
  }
}

function fight() {
  console.log("");
  console.log(`You have chosen to fight ${currentEnemy.name}`);
  console.log("");
}

function retreat() {
  console.log("");
  console.log(`You have chosen to retreat!`);
  console.log("");
  console.log("...pussy");
  console.log("");
}

function somethingUnexpected() {
  console.log("");
  console.log(
    `You chosen a Samurai suicide, remove your sword and insert into abdomen. Goodbye!`
  );
  console.log("");
}

function doNothing() {
  console.log("");
  console.log("You chose to do nothing.");
  console.log("");
}
