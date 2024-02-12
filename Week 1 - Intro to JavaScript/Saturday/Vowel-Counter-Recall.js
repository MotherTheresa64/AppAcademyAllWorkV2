/*Write a function, countVowels(word), that takes in a string word and returns the 
number of vowels in the word. 
Vowels are the letters "a", "e", "i", "o", "u".*/

function countVowels(word) {
  // Convert the word to lowercase to handle both upper and lower case vowels
  const lowerWord = word.toLowerCase();
  
  // Initialize a count for vowels
  let vowelCount = 0;
  
  // Iterate through each character in the word
  for (let i = 0; i < lowerWord.length; i++) {
    const char = lowerWord[i];
    
    // Check if the character is a vowel
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      vowelCount++;
    }
  }
  
  return vowelCount;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
