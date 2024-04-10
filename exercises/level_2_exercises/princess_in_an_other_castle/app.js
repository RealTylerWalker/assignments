const readlineSync = require("readline-sync");

// Create statuses

const POWERED_UP = "Powered-Up";
const BIG = "Big";
const SMALL = "Small";
const DEAD = "Dead";

// Create Player Constructur

class Player {
  constructor(name) {
    // Create player properties ** name, totalCoins, status, hasStar
    this.name = name;
    this.totalCoins = 0;
    this.status = SMALL;
    this.hasStar = false;
  }

  // Create gotHit

  gotHit() {
    //create if statement that changes player status that levels you down
    if (this.status === POWERED_UP) {
      this.status = BIG;
    } else if (this.status === BIG) {
      this.status = SMALL;
    } else if (this.status === SMALL) {
      this.status = DEAD;
    }
  }

  // Create gotPowerup

  gotPowerup() {
    //create switch that changes player status that levels you up
    if (this.status === SMALL) {
      this.status = BIG;
    } else if (this.status === BIG) {
      this.status = POWERED_UP;
    } else if (this.status === POWERED_UP) {
      this.hasStar = true;
    }
  }

  // Add Coin method

  addCoin() {
    // adds coins to player
    this.totalCoins = ++this.totalCoins;
  }

  // create Print method

  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Total Coins: ${this.totalCoins}`);
    console.log(`Status: ${this.status}`);
    console.log(`Has Star: ${this.hasStar}`);
  }
}

// create a random number function

// Create characters
const characters = ["Mario", "Luigi"];
// readline-sync key in select
const characterIndex = readlineSync.keyInSelect(
  characters,
  `Which character would you like to be?`
);

// Instantiate new players, reference "characters" variable and its index
const playerInst = new Player(characters[characterIndex]);
playerInst.print();

// use random number function to switch to different from game actions gotHit, gotPowerup, addCoin

// Create interval function
const intervalID = setInterval(() => {
  const roll = Math.floor(Math.random() * 3);
  console.log(roll);
  if (roll === 0) {
    playerInst.gotHit();
    console.log("You got hit!");
  }
  if (roll === 1) {
    playerInst.gotPowerup();
    console.log("You powered up!");
  }
  if (roll === 2) {
    playerInst.addCoin();
    console.log("You got a coin!");
  }
  playerInst.print();
  if (playerInst.status === DEAD) {
    console.log(`${playerInst.name} has died!`);
    clearInterval(intervalID);
  } else if (playerInst.totalCoins >= 2) {
    console.log(`You won the game as ${characters[characterIndex]}!`);
    clearInterval(intervalID);
  }
}, 1000);

//create method that prints character info
// if statement that ends game

// clear interval
