const readlineSync = require("readline-sync");
const userName = readlineSync.question("What is your name? ");
  console.log(`Hello ${userName}! Welcome to my escape room. You will be prompted to make choices that will either help you escape or lead to your horrific death!`)

if (readlineSync.keyInYN('Do you wish to continue?')) {
    gameOptions = ['Find the key', 'Put your hand in a hole', 'Open the door'],
    index = readlineSync.keyInSelect(gameOptions, 'What would you like to do?');

switch (index){
    case 0:
    console.log(`You found the key! You have opened the door and are now free to leave.`) 
    break;

    case 1:
    console.log(`You put your hand in a hole and died!`)
    break;

    case 2:
    console.log(`The door is locked, silly muggle. You can't open it without the key!`)
    break;
  default:
    console.log(`Invalid option you tricksy hobbit!`)
}  
  
} else {

  console.log('Bye Bye...');
}



