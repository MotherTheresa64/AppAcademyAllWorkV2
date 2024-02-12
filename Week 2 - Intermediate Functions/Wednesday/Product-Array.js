/*Write a function product(nums) that takes in an array of numbers. 
The function should return the total product of multiplying all numbers of the array together. 
You can assume that nums will not be an empty array.*/

function product(nums) {
  // Initialize a variable to store the total product
  let totalProduct = 1;

  // Iterate through the array and multiply each number with the total product
  for (let i = 0; i < nums.length; i++) {
    totalProduct *= nums[i];
  }

  return totalProduct;
}


console.log(product([10, 3, 5, 2])); // 300
console.log(product([4, 3])); // 12
