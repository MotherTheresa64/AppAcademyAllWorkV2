/*Write a method caesarCipher that takes in a string and a number. 
The function should return a new string where every character of the original is shifted num characters in the alphabet.*/

// Feel free to use this variable:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(str, num) {
  // Helper function to shift a single character
  function shiftChar(char) {
    const isUpperCase = char.match(/[A-Z]/);
    const isLowerCase = char.match(/[a-z]/);

    if (isUpperCase) {
      const codeA = 'A'.charCodeAt(0);
      return String.fromCharCode(((char.charCodeAt(0) - codeA + num) % 26) + codeA);
    } else if (isLowerCase) {
      const codea = 'a'.charCodeAt(0);
      return String.fromCharCode(((char.charCodeAt(0) - codea + num) % 26) + codea);
    }

    // If the character is not a letter, leave it unchanged
    return char;
  }

  // Use the shiftChar function to shift each character in the string
  const result = str.split('').map(shiftChar).join('');

  return result;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
