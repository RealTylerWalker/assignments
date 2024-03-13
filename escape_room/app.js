const readlineSync = require("readline-sync");
const userName = readlineSync.question("What is your name? ");
console.log(
  `Hello ${userName}! Welcome to my escape room. You will be prompted to make choices that will either help you escape or lead to your horrific death!`
);

if (readlineSync.keyInYN("Do you wish to continue?")) {
  let foundKey = false;

  while (true) {
    const gameOptions = [
        "Search for the key",
        "Put your hand in a hole",
        "Open the door",
      ],
      index = readlineSync.keyInSelect(
        gameOptions,
        "What would you like to do?"
      );

    if (index === 1) {
      console.log(`You put your hand in a hole and died!`);
      break;
    }

    if (index === 2) {
      if (foundKey) {
        console.log("You have opened the door and are now free to leave.");
        break;
      }

      if (!foundKey) {
        console.log(`You can't leave the room, you haven't found the key!`);
        continue;
      }
    }
    if (index === 0) {
      if (foundKey) {
        console.log(`You have already found the key, you idiot!`);
        continue;
      }
      if (Math.random() < 0.3) {
        foundKey = true;
        console.log(
          `You found the key and are now free to go and open the door.`
        );
        continue;
      }
      console.log(`Keep searching for the key`);
    }
  }
} else {
  console.log("Bye Bye...");
}
