var readlineSync = require("readline-sync");

players = ["Mario", "Luigi"];

// Asking user which player they want to be

index = readlineSync.keyInSelect(players, `Which player would you like to be?`);

// Character is assigned

const possibleStates = ["dead", "small", "big", "powered-up"];

class Player {
  constructor(name) {
    this.name = name;
    this.totalCoins = 0;
    this.status = possibleStates[1];
    this.hasStar = false;
    // this.setName =
    // this.gotHit =
    // this.gotPowerup =
    // this.addCoin =
    // this.print =
  }
}

const mario = new Player("Mario");
const luigi = new Player("Luigi");

// Use a constructor to assign values to properties of the character

// Create a while loop that keeps the game running so long as the player is not dead
