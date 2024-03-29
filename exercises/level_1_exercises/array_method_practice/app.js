// 1. Remove the last item from the vegetable array.
// 2. Remove the first item from the fruit array.
// 3. Find the index of "orange."
// 4. Add that number to the end of the fruit array.
// 5. Use the length property to find the length of the vegetable array.
// 6. Add that number to the end of the vegetable array.
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
// 8. Remove 2 elements from your new array starting at index 4 with one method.
// 9. Reverse your array.
// 10. Turn the array into a string and return it.

// If you've done everything correctly, the last step should print the following string to the console:

// 3,pepper,1,watermelon,orange,apple

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
  vegetables.pop();
  console.log(vegetables);

// 2. Remove the first item from the fruit array.
  fruit.shift();
  console.log(fruit);

// 3. Find the index of "orange."
var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex);

// 4. Add that number to the end of the fruit array.
fruit.push(1);
console.log(fruit);

// 5. Use the length property to find the length of the vegetable array.
console.log(vegetables.length);

// 6. Add that number to the end of the vegetable array.
var vegatablesArrayLength = vegetables.length
vegetables.push(vegatablesArrayLength)
console.log(vegetables)

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables)
console.log(food)

// 8. Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2)
console.log(food)

// 9. Reverse your array.
var reversedFood = food.reverse()
console.log(reversedFood)

// 10. Turn the array into a string and return it.
var stringifiedFood = reversedFood.join();
console.log(stringifiedFood)