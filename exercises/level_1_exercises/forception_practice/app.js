var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(people, alphabet) {
  var result = []; // Define the result variable to store the result of nested loops
  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      result.push(people[i] + ": " + alphabet[j]); // Concatenate current person with each letter of the alphabet and push to result
    }
  }
  return result;
  console.log(result)
}
forception(people, alphabet)
console.log(forception(people, alphabet));

// function errand (){
//   return 'did thing';
// }

// errand()
// console.log(errand())