/*Write a function reverseSentence(sentence) that takes in a sentence as an arg. 
The function should return a new sentence where the order of the words is reversed. 
Note that you should reverse the order among words, not the order among characters.*/

function reverseSentence(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(' ');

  // Reverse the array of words
  const reversedWords = words.reverse();

  // Join the reversed words back into a sentence
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}


console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
