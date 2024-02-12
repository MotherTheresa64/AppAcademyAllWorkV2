/*Write a function abbreviate(word) that takes in a string arg. 
The function should return a new string where all of its vowels are removed.*/

function abbreviate(word) {
  // Define a string of vowels
  const vowels = "aeiouAEIOU";

  // Use the replace method with a regular expression to remove vowels
  const abbreviatedWord = word.replace(/[aeiouAEIOU]/g, '');

  return abbreviatedWord;
}


console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'
