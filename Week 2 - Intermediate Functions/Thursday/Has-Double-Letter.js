/*Write a function hasDoubleLetter(str) that accepts a string. 
The function should return a boolean indicating whether the string contains two of the same character consecutively. 
If the value passed into the function is not a string, return null.*/

function hasDoubleLetter(str) {
  // Check if the input is a string
  if (typeof str !== 'string') {
    return null;
  }

  // Iterate through the string to check for consecutive identical characters
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
  }

  return false;
}

// Example usage:
console.log(hasDoubleLetter("hello")); // Output: true
console.log(hasDoubleLetter("world")); // Output: false
console.log(hasDoubleLetter("mississippi")); // Output: true
console.log(hasDoubleLetter(12345)); // Output: null
