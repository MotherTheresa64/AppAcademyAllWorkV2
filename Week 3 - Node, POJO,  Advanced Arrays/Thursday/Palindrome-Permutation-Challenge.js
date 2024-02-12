/*Given a sequence, seq, write a function that returns true if the sentence can be rearranged into a palindrome and false if not. Ignore whitespace and assume all characters are lowercase.
Note: A palindrome is a sequence that reads the same backwards as is does
forward.*/

function isPalindromeRearrange(seq) {
    // Remove whitespace and convert to lowercase
    seq = seq.replace(/\s/g, '').toLowerCase();
  
    const charCount = {};
  
    // Count the frequency of each character
    for (const char of seq) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    let oddCount = 0;
  
    // Check the character counts
    for (const count of Object.values(charCount)) {
      if (count % 2 !== 0) {
        oddCount++;
        if (oddCount > 1) {
          return false; // More than one character with an odd count
        }
      }
    }
  
    return true;
  }
  
  // Example usage:
  console.log(isPalindromeRearrange("taco cat")); // Output: true
  console.log(isPalindromeRearrange("race car")); // Output: true
  console.log(isPalindromeRearrange("hello world")); // Output: false
  