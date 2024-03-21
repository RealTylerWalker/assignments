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

let heroWeaponInventory = [];

const hero = new character(playerName, 1000, 11, heroWeaponInventory);
const badGuy1 = new character("Tommy 'The Rugrat' Pickels", 45, 5, [
  "reusable diaper",
  "safety pin",
  "resourcefulness",
]);
const badGuy2 = new character("Danger Nate", 65, 8, [
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
  if (enemies.length === 0) {
    console.log(
      `Congrats ${hero.name}, you have conquered the land of Intrepidshire!`
    );
    process.exit();
  }
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
        fight(currentEnemy);
      } else if (fightAction === 1) {
        retreat(currentEnemy);
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

function fight(currentEnemy) {
  console.log("");
  console.log(`You must fight ${currentEnemy.name}`);
  console.log("");

  while (hero.healthPoints > 0 && currentEnemy.healthPoints > 0) {
    currentEnemy.healthPoints -= hero.attackPoints;
    console.log(
      `Your attack took ${hero.attackPoints} healthpoints from ${currentEnemy.name}. ${currentEnemy.name}, now has ${currentEnemy.healthPoints} health points!`
    );
    hero.healthPoints -= currentEnemy.attackPoints;
    console.log(
      `${currentEnemy.name} bested you and took ${currentEnemy.attackPoints} health points from you. You now have ${hero.healthPoints} health points left.`
    );
    if (hero.healthPoints <= 0) {
      console.log(`${currentEnemy.name} has defeated you. Good bye.`);
      isGameRunning = false;
    } else if (currentEnemy.healthPoints <= 0) {
      console.log("");
      console.log(
        `Well done ${hero.name}, you have defeated ${currentEnemy.name}! `
      );
      console.log("");
      if (currentEnemy.inventory.length > 0) {
        let randomIndex = getRandomNumber(0, currentEnemy.inventory.length - 1);
        let itemToTake = currentEnemy.inventory[randomIndex];
        heroWeaponInventory.push(itemToTake);
        console.log(`You obtained ${itemToTake} from ${currentEnemy.name}!`);
        currentEnemy.inventory.splice(randomIndex, 1); // Remove the item from enemy's inventory
      }
      enemies = enemies.filter((item) => item.name !== currentEnemy.name);
    }
  }
}

function retreat(currentEnemy) {
  console.log("");
  console.log(`You have chosen to retreat from ${currentEnemy.name}`);
  console.log("");
  console.log("...pussy");
  console.log("");
  let escapeChance = getRandomNumber(1, 2);
  if (escapeChance === 1) {
    console.log("");
    console.log(
      `Congrats ${hero.name}, you escaped from ${currentEnemy.name}! `
    );
    console.log("");
  } else if (escapeChance === 2) {
    console.log("");
    console.log(
      `Unfortunately, you failed to escape the grasp of ${currentEnemy.name}. You must continue to fight!`
    );
    console.log("");
    fight(currentEnemy);
  }
}

function somethingUnexpected() {
  console.log("");
  console.log(
    `You have chosen a Samurai suicide, remove your sword and insert into abdomen. Goodbye!`
  );
  console.log("");
}

function doNothing() {
  console.log("");
  console.log("You chose to do nothing.");
  console.log("");
}
