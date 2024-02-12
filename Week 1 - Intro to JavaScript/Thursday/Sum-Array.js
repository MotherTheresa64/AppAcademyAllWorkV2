/*Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.*/
function sumArray(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log(result); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
