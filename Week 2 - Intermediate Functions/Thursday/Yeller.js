/*Write a function yeller(words) that takes in an array of words. 
The function should return a new array where each element of the original array is yelled.*/

function yeller(words) {
  const yelledWords = words.map(word => word.toUpperCase() + '!');
  return yelledWords;
}

// Example usage:
const words = ['hello', 'world', 'yay'];
const yelledArray = yeller(words);
console.log(yelledArray); // Output: ["HELLO!", "WORLD!", "YAY!"]
