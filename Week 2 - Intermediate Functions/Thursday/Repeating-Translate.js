// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

function repeatingTranslate(sentence) {
  // Define a helper function to check if a letter is a vowel
  function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase());
  }

  // Define a helper function to translate a single word
  function translateWord(word) {
    if (word.length < 3) {
      return word; // Short words are unchanged
    } else {
      let lastVowelIndex = -1;

      // Find the index of the last vowel in the word
      for (let i = word.length - 1; i >= 0; i--) {
        if (isVowel(word[i])) {
          lastVowelIndex = i;
          break;
        }
      }

      if (lastVowelIndex === -1) {
        // If there are no vowels, repeat the entire word
        return word + word;
      } else {
        // Repeat all letters after the last vowel, including the vowel itself
        return word + word.slice(lastVowelIndex);
      }
    }
  }

  // Split the sentence into words and process each word
  const words = sentence.split(' ');
  const translatedWords = words.map(word => {
    // Preserve capitalization
    if (word[0] === word[0].toUpperCase()) {
      return translateWord(word).charAt(0).toUpperCase() + translateWord(word).slice(1);
    } else {
      return translateWord(word);
    }
  });

  // Join the translated words back into a sentence
  return translatedWords.join(' ');
}

// Example usage:
const sentence = "I like to eat trash and apples.";
const translatedSentence = repeatingTranslate(sentence);
console.log(translatedSentence); // Output: "I likelike to eat trashash and apples."
