function getLongestWord(arr) {
  let longestWord = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}
console.log(getLongestWord(["onion", "salad", "beans", "heterozygous"]));

// example
// getLongestWord(['cat',"kitten","tiger"])
