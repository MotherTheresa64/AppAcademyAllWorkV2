/*A number's summation is the sum of all positive numbers less than or equal to the number. For example: the summation of 3 is 6 because 1 + 2 + 3 = 6, the summation of 6 is 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21. 
Write a function summationSequence that takes in two numbers: start and length. The function should return an array containing length total elements. The first number of the sequence should be the start number. 
At any point, to generate the next element of the sequence we take the summation of the previous element. You can assume that length is not zero.*/

function summationSequence(start, length) {
  const sequence = [start];

  for (let i = 1; i < length; i++) {
    const previousElement = sequence[i - 1];
    const nextElement = getSummation(previousElement);
    sequence.push(nextElement);
  }

  return sequence;
}

function getSummation(number) {
  let summation = 0;
  for (let i = 1; i <= number; i++) {
    summation += i;
  }
  return summation;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
