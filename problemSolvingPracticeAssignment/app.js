function findLargestNumber(poop) {
  let max = poop[0];
  for (let i = 0; i < poop.length; i++) {
    if (poop[i] > max) {
      max = poop[i];
    }
  }

  return max;
}

const allTheNumbers = [0, 0, 0, 0];
console.log(findLargestNumber(allTheNumbers));

function lettersWithACertainCharacter(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("!")) result.push(arr[i]);
  }
  return result;
}

const letters = ["hello", "batman$", "ca!woman", "deadpoo!", "echo"];
console.log(lettersWithACertainCharacter(letters));

function isDivisibleBy2(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) result.push(arr[i]);
  }
  return result;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(isDivisibleBy2(numbers));
