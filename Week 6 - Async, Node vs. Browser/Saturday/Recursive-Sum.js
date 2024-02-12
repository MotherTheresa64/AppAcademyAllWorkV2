/*Write a function, recursiveSum, that will use recursion to add up all of the
integers in a given array.*/

function recursiveSum(arr) {
    // Base case: if the array is empty, the sum is 0.
    if (arr.length === 0) {
      return 0;
    }
  
    // Recursive case: sum the first element with the sum of the rest of the array.
    return arr[0] + recursiveSum(arr.slice(1));
  }
  
  // Example:
  const numbers = [1, 2, 3, 4, 5];
  
  console.log(recursiveSum(numbers)); // Output: 15
  