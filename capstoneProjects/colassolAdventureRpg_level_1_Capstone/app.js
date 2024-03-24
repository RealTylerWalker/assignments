const readline = require("readline-sync");

// Game introduction

console.log("");
const playerName = readline.question(
  "Hello there, you must be quite the intrepid traveler to venture into these woods, what is your name? "
);
console.log("");
console.log(`Welcome to the land of Intrepidshire, ${playerName}!`);
let isGameRunning = true;
console.log("");

// character constructor function

class character {
  constructor(name, healthPoints, attackPoints, inventory) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
    this.inventory = inventory;
  }
  printInventory() {
    console.log("");
    if (this.inventory.length === 0) {
      console.log("There are no items in your inventory!");
      console.log("");
    } else {
      console.log(`Items in your possession: ${this.inventory}`);
      console.log("");
    }
  }
}

// hero's weapon inventory starts with an empty array and items are pushed to it as enemies are defetead

// Instantiations of my character constructor function

const hero = new character(playerName, 1000, 11, []);
const badGuy1 = new character("Tommy 'The Rugrat' Pickels", 45, 5, [
  " reusable diaper",
  " safety pin",
  " resourcefulness",
]);
const badGuy2 = new character("Danger Nate", 65, 8, [
  " Gold Tooth",
  " Swiss Army Knife",
  " brass knuckles",
]);
const badGuy3 = new character("Wreck-it-Ralph", 100, 10, [
  " hands the size of frying pans",
  " Magic Hammer",
  " bricks",
]);

let enemies = [badGuy1, badGuy2, badGuy3];

// Random number generator

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// begin base level game loop

while (isGameRunning) {
  // game ending If statement

  if (enemies.length === 0) {
    console.log(
      `Congrats ${hero.name}, you have conquered the land of Intrepidshire!`
    );
    console.log("");
    process.exit();
  }

  // base level loop question

  let action = readline.question(
    `What would you like to do? Press [w] to walk, [i] to see your inventory, or [hk] for something unexpected: `,
    { limit: ["w", "i", "hk"] }
  );

  // loop question option for checking inventory

  if (action === "i") {
    hero.printInventory();
  }

  // loop question option to walk

  if (action === "w") {
    console.log("");
    console.log("You chose to walk:");
    console.log("");

    // calling my getRandomNumber() function to determine probability of running into an enemy while walking

    let enemyChance = getRandomNumber(1, 4);
    if (enemyChance === 3) {
      let randomEnemyIndex = getRandomNumber(0, enemies.length - 1);
      let currentEnemy = enemies[randomEnemyIndex];
      console.log("");
      console.log(`${currentEnemy.name} has appeared! `);
      const enemyOptions = ["Fight!", "Retreat!", "Something unexpected!"];

      // if my getRandomNumber() function returns an enemy, the following variable gives you options to choose from

      let fightAction = readline.keyInSelect(
        enemyOptions,
        "What would you like to do?"
      );

      // nested if statment that returns player to the base loop

      if (fightAction === -1) {
        doNothing();
        continue;

        // nested if statment that calls my fight() function
      } else if (fightAction === 0) {
        fight(currentEnemy);

        // nested if statment that calls my retreat function
      } else if (fightAction === 1) {
        retreat(currentEnemy);
        continue;

        // nested if statment that calls my somethingUnexpected()
      } else if (fightAction === 2) {
        somethingUnexpected();
        isGameRunning = false;

        // nested statement that prompts user to make a correct choice
      } else {
        console.log("");
        console.log("Invalid option selected.");
        console.log("");
      }

      // if my getRandomNumber function doesn't return an enemey the following statement is fired
    } else {
      console.log("");
      console.log(
        "You narrowly avoided detection by an enemy...well done, intrepid traveler!"
      );
      console.log("");
    }
  }

  // The final option in my base level loop question

  if (action === "hk") {
    console.log("");
    console.log(
      `You chose hari-kari, remove your sword and insert into abdomen. Goodbye!`
    );
    console.log("");
    isGameRunning = false;
  }
}

// end of base level loop

// *** Definitions of functions ***

// fight function

function fight(currentEnemy) {
  console.log("");
  console.log(`You must fight ${currentEnemy.name}`);
  console.log("");

  // fight function while loop

  while (hero.healthPoints > 0 && currentEnemy.healthPoints > 0) {
    //When the enemy hits you, his attack points are subtracted from you

    currentEnemy.healthPoints -= hero.attackPoints;
    console.log("");
    console.log(
      `Your attack took ${hero.attackPoints} healthpoints from ${currentEnemy.name}. ${currentEnemy.name}, now has ${currentEnemy.healthPoints} health points!`
    );

    // If enemy wins a battle, his attack points are subtracted from my health points

    console.log("");
    hero.healthPoints -= currentEnemy.attackPoints;
    console.log("");
    console.log(
      `${currentEnemy.name} bested you and took ${currentEnemy.attackPoints} health points from you. You now have ${hero.healthPoints} health points left.`
    );
    console.log("");

    // if hero loses the fight

    if (hero.healthPoints <= 0) {
      console.log("");
      console.log(`${currentEnemy.name} has defeated you. Good bye.`);
      console.log("");
      isGameRunning = false;

      // if hero wins the fight
    } else if (currentEnemy.healthPoints <= 0) {
      console.log("");
      console.log(
        `Well done ${hero.name}, you have defeated ${currentEnemy.name}! `
      );
      console.log("");

      // if hero wins, then the following if statement gives the hero a random item from the defeated enemies inventory

      if (currentEnemy.inventory.length > 0) {
        let randomIndex = getRandomNumber(0, currentEnemy.inventory.length - 1);

        // inventory item is pushed to heroWeaponInventory

        let itemToTake = currentEnemy.inventory[randomIndex];
        hero.inventory.push(itemToTake);
        console.log("");
        console.log(`You obtained ${itemToTake} from ${currentEnemy.name}!`);
        console.log("");
        currentEnemy.inventory.splice(randomIndex, 1);
      }

      // this function redefines my enemies array by making sure you dont fight an enemy you have already defeated

      enemies = enemies.filter((item) => item.name !== currentEnemy.name);
    }
  }
}

// retreat function

function retreat(currentEnemy) {
  console.log("");
  console.log(`You have chosen to retreat from ${currentEnemy.name}`);
  console.log("");
  console.log("...pussy");
  console.log("");

  // calling my getRandomNumber function to determine if my hero is able to escape the enemy if hero chooses to retreat

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
    // if hero is unable to escape, fight function is called

    fight(currentEnemy);
  }
}

//something unexpected function

function somethingUnexpected() {
  console.log("");
  console.log(
    `You have chosen a Samurai suicide, remove your sword and insert into abdomen. Goodbye!`
  );
  console.log("");
}

//do nothing function

function doNothing() {
  console.log("");
  console.log("You chose to do nothing.");
  console.log("");
}
