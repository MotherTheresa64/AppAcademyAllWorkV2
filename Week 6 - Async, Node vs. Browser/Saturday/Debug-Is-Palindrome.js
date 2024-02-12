/*Debug this recursive function isPalindrome that returns a boolean to indicate
whether or not a string is a valid palindrome. Look carefully at the test
cases to determine any edge cases that must be accounted for. Use
console.log()s to analyze the current behavior of the function, and any lines
of code that you are not familiar with (such as the regex within the replace function).
When you are finished debugging, all test cases should pass.
Note: You do not need to know regex to debug this solution. Use what you know
about recursion to find and fix the bugs.*/

function isPalindrome(str) {
    // Base case
    if (str.length <= 1) {
      return true;
    }
  
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log('Cleaned string:', str);
  
    // Check if the first and last characters are the same
    if (str[0] === str[str.length - 1]) {
      console.log('First and last characters match:', str[0]);
      // Recursive case: remove the first and last characters
      return isPalindrome(str.slice(1, -1));
    } else {
      console.log('First and last characters do not match:', str[0], str[str.length - 1]);
      return false;
    }
  }
  
  // Test cases
  console.log(isPalindrome("racecar")); // should return true
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // should return true
  console.log(isPalindrome("race car")); // should return true
  console.log(isPalindrome("hello")); // should return false
  console.log(isPalindrome("racecart")); // should return false
  