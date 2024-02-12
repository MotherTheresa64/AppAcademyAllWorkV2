/*Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou". 

Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String's slice() method. The slice() method extracts a section of a string and returns it as a string. 

Hint: Remember the String.includes method!*/

// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
  // Define a set of vowels for checking
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Check if the word starts with a vowel
  if (vowels.includes(word[0].toLowerCase())) {
    return word + 'ay'; // If it starts with a vowel, simply add 'ay' to the end
  } else {
    // If it starts with a consonant, find the first vowel in the word
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        // Use slice() to move the consonant cluster to the end and add 'ay'
        return word.slice(i) + word.slice(0, i) + 'ay';
      }
    }
  }
  return word; // Return the word as is if there are no vowels
}


console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
