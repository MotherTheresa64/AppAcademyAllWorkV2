/*Write a function abbreviateWords(sentence) that takes in a sentence string. 
The function should return a new sentence where words that are longer than 4 characters have their vowels removed. 
Hint: Consider creating a helper function to remove all vowels in a string.*/

// Helper function to remove vowels from a word
function removeVowels(word) {
  const vowels = "aeiouAEIOU";
  return word.split('').filter(char => !vowels.includes(char)).join('');
}

// Main function to abbreviate words in a sentence
function abbreviateWords(sentence) {
  const words = sentence.split(' ');

  // Map over the words, removing vowels from those longer than 4 characters
  const abbreviatedWords = words.map(word => {
    if (word.length > 4) {
      return removeVowels(word);
    }
    return word;
  });

  return abbreviatedWords.join(' ');
}

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
