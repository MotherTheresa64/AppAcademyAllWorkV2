/*Write a function chooseyEndings that accepts an array of words and a suffix string as arguments. 
The function should return a new array containing the words that end in the given suffix. If the value passed in is not an array, return an empty array.
HINT: There are built in JavaScript functions that will help with determining if a strings ends a certain way. Go see if you can find it on MDN!*/

function chooseyEndings(words, suffix) {
  // Check if the input is an array
  if (!Array.isArray(words)) {
    return [];
  }

  // Use the filter method to create a new array with words ending in the given suffix
  const wordsWithSuffix = words.filter(word => word.endsWith(suffix));
  
  return wordsWithSuffix;
}

// Example usage:
const wordArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const suffix = 'ry';
const wordsWithSuffix = chooseyEndings(wordArray, suffix);
console.log(wordsWithSuffix); // Output: ["cherry", "elderberry"]
