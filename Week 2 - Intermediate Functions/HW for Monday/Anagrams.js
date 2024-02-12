/*Write a function anagrams that takes in two words and returns a boolean indicating whether or not the words are anagrams. 
Anagrams are words that contain the same characters but not necessarily in the same order. 
Solve this without using .sort().*/

function anagrams(word1, word2) {
  // If the lengths of the words are different, they can't be anagrams
  if (word1.length !== word2.length) {
    return false;
  }

  // Create character frequency maps for both words
  const charCount1 = {};
  const charCount2 = {};

  // Populate the frequency maps for word1
  for (const char of word1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Populate the frequency maps for word2
  for (const char of word2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Compare the character frequency maps
  for (const char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

console.log(anagrams("cat", "act"));          // true
console.log(anagrams("restful", "fluster"));  // true
console.log(anagrams("cat", "dog"));          // false
console.log(anagrams("boot", "bootcamp"));    // false
