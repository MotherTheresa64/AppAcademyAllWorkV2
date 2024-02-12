/*Write a function maxValue(nums) that takes in an array of numbers as an arg. 
The function should return the largest number of the array. 
If the array is empty, the function should return null.*/

function maxValue(nums) {
  // Check if the array is empty
  if (nums.length === 0) {
    return null;
  }

  // Initialize a variable to keep track of the maximum value
  let max = nums[0];

  // Iterate through the array to find the maximum value
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}


console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
