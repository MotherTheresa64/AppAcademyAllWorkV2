/*Write a function hasVowel(str) that takes in a string. The function should return a boolean, 
true if the string contains at least one vowel, false otherwise. 
Vowels are the letters a, e, i, o, u.*/

function hasVowel(str) {
  // Convert the string to lowercase to handle both upper and lower case vowels
  const lowerStr = str.toLowerCase();
  
  // Iterate through each character in the string
  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];
    
    // Check if the character is a vowel
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return true; // Found a vowel, return true
    }
  }
  
  return false; // No vowels found, return false
}

console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false
