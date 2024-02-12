/*Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.*/

function removeLastVowel(word) {
  // Define a string containing all vowels
  const vowels = "aeiouAEIOU";

  // Initialize variables to keep track of the last vowel's index
  let lastVowelIndex = -1;

  // Find the index of the last vowel in the word
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      lastVowelIndex = i;
    }
  }

  // If a vowel was found, remove it and return the modified word
  if (lastVowelIndex !== -1) {
    return word.slice(0, lastVowelIndex) + word.slice(lastVowelIndex + 1);
  }

  // If no vowel was found, return the original word
  return word;
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
