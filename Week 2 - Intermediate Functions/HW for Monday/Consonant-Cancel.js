/*Write a function consonantCancel that takes in a sentence and returns a new sentence where every word begins with it's first vowel.*/

function consonantCancel(sentence) {
    // Helper function to find the index of the first vowel in a word
    function findFirstVowelIndex(word) {
      const vowels = 'aeiouAEIOU';
  
      for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
          return i;
        }
      }
  
      return -1; // If no vowels are found, return -1
    }
  
    // Split the sentence into words
    const words = sentence.split(' ');
  
    // Process each word and modify it
    const transformedWords = words.map((word) => {
      const firstVowelIndex = findFirstVowelIndex(word);
  
      if (firstVowelIndex === -1) {
        return word; // If no vowels are found, leave the word unchanged
      }
  
      const prefix = word.substring(0, firstVowelIndex);
      const suffix = word.substring(firstVowelIndex);
      return suffix + prefix;
    });
  
    // Join the transformed words back into a sentence
    const transformedSentence = transformedWords.join(' ');
  
    return transformedSentence;
  }

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
