/*Write a function removeLastVowel(word) that takes in a 
string and returns the string with its last vowel removed.*/

function removeLastVowel(word) {
  const vowels = "aeiouAEIOU";

  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i];

    if (vowels.includes(char)) {
      // Remove the last vowel and return the modified string
      return word.slice(0, i) + word.slice(i + 1);
    }
  }

  // If no vowels are found, return the original word
  return word;
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
