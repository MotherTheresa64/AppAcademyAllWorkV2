/*Write a function additionMutator that accepts an array and a number as an arguments. 
The function should mutate the input array such that every element has the given number added to it.*/

function additionMutator(array, number) {
  for (let i = 0; i < array.length; i++) {
    array[i] += number;
  }
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
additionMutator(myArray, 10); // Add 10 to each element
console.log(myArray); // Output: [11, 12, 13, 14, 15]
