/*Write a function, recursiveIsSorted, that takes in an array and returns a boolean
indicating whether the array is sorted (in ascending order). You must use a
recursive approach to solve this problem. Do not use the built-in sort method.*/

function recursiveIsSorted(arr) {
    // Base case: An array with one or zero elements is always sorted.
    if (arr.length <= 1) {
      return true;
    }
  
    // Recursive case: Check if the first element is less than or equal to the second
    // element, and recursively check the rest of the array.
    if (arr[0] > arr[1]) {
      return false;
    }
  
    return recursiveIsSorted(arr.slice(1));
  }
  
  // Example:
  const sortedArray = [1, 2, 3, 4, 5];
  const unsortedArray = [3, 1, 5, 2, 4];
  
  console.log(recursiveIsSorted(sortedArray)); // Output: true
  console.log(recursiveIsSorted(unsortedArray)); // Output: false
  