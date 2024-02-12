/*Write a function twoSum(arr, target) that accepts an array and a target number as args. The function should a return a boolean indicating if two distinct numbers of the array add up to the target value. 
You can assume that input array contains only unique numbers.*/

function twoSum(arr, target) {
  // Create an empty object to store seen numbers
  const seenNumbers = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const complement = target - currentNumber;

    // Check if the complement has been seen before
    if (seenNumbers[complement]) {
      return true; // Found two distinct numbers that add up to the target
    }

    // Add the current number to the seen numbers object
    seenNumbers[currentNumber] = true;
  }

  return false; // No two distinct numbers add up to the target
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false
