/*Write a function alternatingWords that accepts an array of words as an argument. 
The function should mutate the input array such that the words alternate between fully uppercase or lowercase.
The first word should be uppercase.*/

function alternatingWords(words) {
  let toUppercase = true;

  for (let i = 0; i < words.length; i++) {
    if (toUppercase) {
      words[i] = words[i].toUpperCase();
    } else {
      words[i] = words[i].toLowerCase();
    }

    // Toggle the case for the next word
    toUppercase = !toUppercase;
  }
}

// Example usage:
const wordArray = ["apple", "banana", "cherry", "date", "elderberry"];
alternatingWords(wordArray);
console.log(wordArray); // Output: ["APPLE", "banana", "CHERRY", "date", "ELDERBERRY"]
