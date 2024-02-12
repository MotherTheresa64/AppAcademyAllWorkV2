/*Write a function longestWord(sentence) that takes in a sentence string as an argument. 
The function should return the longest word in the sentence.
 If there is more than one "longest word", return the first of these instances.*/

 function longestWord(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(' ');

  // Initialize variables to keep track of the longest word and its length
  let longest = '';
  let maxLength = 0;

  // Iterate through the words to find the longest one
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // Remove any non-alphabet characters from the word
    const cleanedWord = word.replace(/[^a-zA-Z]/g, '');

    // Check if the cleaned word is longer than the current longest word
    if (cleanedWord.length > maxLength) {
      longest = cleanedWord;
      maxLength = cleanedWord.length;
    }
  }

  return longest;
}


console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
