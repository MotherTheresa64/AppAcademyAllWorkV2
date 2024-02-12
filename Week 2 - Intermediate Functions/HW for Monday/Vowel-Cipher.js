/*Write a function vowelCipher that takes in a string and returns a new string where every vowel becomes the next vowel in the alphabet.*/

function vowelCipher(str) {
    // Helper function to get the next vowel
    function getNextVowel(char) {
      switch (char) {
        case 'a': return 'e';
        case 'e': return 'i';
        case 'i': return 'o';
        case 'o': return 'u';
        case 'u': return 'a';
        case 'A': return 'E';
        case 'E': return 'I';
        case 'I': return 'O';
        case 'O': return 'U';
        case 'U': return 'A';
        default: return char;
      }
    }
  
    // Use the getNextVowel function to transform each character in the string
    const result = str.split('').map((char) => getNextVowel(char)).join('');
  
    return result;
  }
  
  
  console.log(vowelCipher("bootcamp")); // "buutcemp"
  console.log(vowelCipher("paper cup")); // "pepir cap"
