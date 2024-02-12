/*Write a function, recursiveReverseString, that takes in a string and returns
the string with the characters in reverse order. You must use a recursive
solution to solve this problem.*/

function recursiveReverseString(str) {
    // Base case: If the string is empty or has only one character, return it.
    if (str.length <= 1) {
      return str;
    }
  
    // Recursive case: Return the last character of the string concatenated with
    // the reverse of the rest of the string.
    return str.charAt(str.length - 1) + recursiveReverseString(str.slice(0, -1));
  }
  
  // Example:
  const originalString = "hello";
  const reversedString = recursiveReverseString(originalString);
  
  console.log(reversedString); // Output: "olleh"
  