/*Given a sentence string, sentence, write a function that returns the most
common character within the sentence. If there are multiple characters that
appear the most, return the lexicographically smallest one (e.g. if 'a' and 'b' are both the most common, return 'a' because it is closest to the beginning of the alphabet). Be sure to exclude spaces when counting
characters.*/

function mostCommonCharacter(sentence) {
    const charCount = {}; // Create an object to store character counts
  
    // Remove spaces and convert the sentence to lowercase for accurate counting
    const sanitizedSentence = sentence.replace(/ /g, '').toLowerCase();
  
    // Count the occurrence of each character in the sentence
    for (const char of sanitizedSentence) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    let mostCommonChar = '';
    let maxCount = 0;
  
    // Find the most common character and the lexicographically smallest one
    for (const char in charCount) {
      if (charCount[char] > maxCount || (charCount[char] === maxCount && char < mostCommonChar)) {
        mostCommonChar = char;
        maxCount = charCount[char];
      }
    }
  
    return mostCommonChar;
  }
  
  // Example usage:
  const sentence = "The quick brown fox jumps over the lazy dog";
  const mostCommon = mostCommonCharacter(sentence);
  console.log(mostCommon); // Output: 'o'
  