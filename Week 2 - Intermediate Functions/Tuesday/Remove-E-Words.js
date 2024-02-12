/*Write a function removeEWords(sentence) that accepts a sentence string as an arg. 
The function should return a new string, containing only the words that don't have the letter "e" in them.*/

function removeEWords(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(' ');

  // Filter out words that don't contain the letter "e"
  const filteredWords = words.filter(word => !word.includes('e'));

  // Join the filtered words back into a sentence
  const newSentence = filteredWords.join(' ');

  return newSentence;
}


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
