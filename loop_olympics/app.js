// // 1. Write a for loop that prints to the console the numbers 0 through 9.
for (let i = 0; i <= 9; i++){
    console.log(i)
}
// // 2. Write a for loop that prints to the console 9 through 0.
for (let i = 9; i >= 0; i--){
    console.log(i)
}
// // 3. Write a for loop that prints these fruits to the console.`****`

const fruit = ["banana", "orange", "apple", "kiwi"]
for (let i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

// 1. Write a for loop that will push the numbers 0 through 9 to an array.
let numbersArr = []
for (let i = 0; i <= 9; i++){
    numbersArr.push(i)
}
console.log(numbersArr)

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
for (let i = 0; i <= 100; i++){
    if (i % 2 !== 1)
    console.log(i)
}
// 3. Write a for loop that will push every other fruit to an array.

const fruit1 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
const everyOtherFruit = [];
for (let i = 0; i < fruit1.length; i+=2){
    everyOtherFruit.push(fruit1[i]);
}
console.log(everyOtherFruit)