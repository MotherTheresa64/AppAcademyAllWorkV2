/*Write a function lastVowel(str) that takes in a string and 
returns the last vowel that appears sequentially in the string. 
Note that the string may contain capitalization. 
Hint: You may find the String.toLowerCase or String.toUpperCase methods useful*/

function lastVowel(str) {
  const vowels = "aeiou";

  // Convert the string to lowercase to handle capitalization
  const lowerStr = str.toLowerCase();

  for (let i = lowerStr.length - 1; i >= 0; i--) {
    const char = lowerStr[i];

    if (vowels.includes(char)) {
      // Find the lowercase vowel and return the original case
      return str[i];
    }
  }

  return null;
}


console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
