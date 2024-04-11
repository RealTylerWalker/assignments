const vowelCharacters = ["a", "e", "i", "o", "u"];
function countVowels(str) {
  const checkToSeeIfVowel = (character) => {
    return vowelCharacters.includes(character);
  };

  let includedVowles = str.split("").filter(checkToSeeIfVowel);
  return { includedVowles: includedVowles, total: includedVowles.length };
}

console.log(countVowels("hello")); // Expected output: 2 (e, o)
console.log(countVowels("programming")); // Expected output: 3 (o, a, i)
console.log(countVowels("javascript")); // Expected output: 3 (a, a, i)
