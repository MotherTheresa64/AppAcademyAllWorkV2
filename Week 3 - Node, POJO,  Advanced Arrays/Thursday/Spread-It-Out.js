/*Write a function named spreadItOut(array1, array2) that accepts two arrays and
uses spread operator syntax to return a single array.*/

function spreadItOut(array1, array2) {
    return [...array1, ...array2];
  }
  
  // Example usage:
  const firstArray = [1, 2, 3];
  const secondArray = [4, 5, 6];
  const combinedArray = spreadItOut(firstArray, secondArray);
  console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
  