/*Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou". 

Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String's slice() method. The slice() method extracts a section of a string and returns it as a string. 

Hint: Remember the String.includes method!*/

function pigLatinWord(word) {
  // Define a set of vowels
  const vowels = "aeiou";

  // Check if the word begins with a vowel
  if (vowels.includes(word[0].toLowerCase())) {
    return word + "-yay"; // Word starts with a vowel, add "-yay" at the end
  } else {
    // Find the index of the first vowel in the word
    let firstVowelIndex = -1;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        firstVowelIndex = i;
        break;
      }
    }

    // Move the consonant cluster to the end and add "ay"
    const consonantCluster = word.slice(0, firstVowelIndex);
    const remainingLetters = word.slice(firstVowelIndex);
    return remainingLetters + "-" + consonantCluster + "ay";
  }
}
