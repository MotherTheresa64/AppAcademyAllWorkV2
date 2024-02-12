/*Write a function mostVowels that takes in a sentence string and returns the word of the sentence that contains the most vowels.*/

function mostVowels(sentence) {
  const words = sentence.split(" ");
  let mostVowelWord = "";
  let maxVowelCount = 0;

  for (let word of words) {
    let vowelCount = 0;

    for (let char of word) {
      if ("aeiouAEIOU".includes(char)) {
        vowelCount++;
      }
    }

    if (vowelCount > maxVowelCount) {
      maxVowelCount = vowelCount;
      mostVowelWord = word;
    }
  }

  return mostVowelWord;
}


console.log(mostVowels("what a wonderful life")); // "wonderful"
