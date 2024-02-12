/*This problem is worth 7 points. 
You may receive partial credit.
 First, create a function called getProduct(nums) which takes a
single array of numbers and returns the product. 

Then, write a function highestProduct(numsList) that takes in a 2-dimensional
array of numbers and returns the index of the sub-array with
the highest product value (the value of all of the elements multiplied
together). Hint: You may use the getProduct function as a helper function in
the highestProduct function to solve the problem. */

function getProduct(nums) {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  return product;
}

function highestProduct(numsList) {
  let maxProduct = -Infinity;
  let maxProductIndex = -1;
  
  for (let i = 0; i < numsList.length; i++) {
    const product = getProduct(numsList[i]);
    if (product > maxProduct) {
      maxProduct = product;
      maxProductIndex = i;
    }
  }
 
  return maxProductIndex;
}

const numsList = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result = highestProduct(numsList);

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 7];
const arrayC = [20, 100, 1, 2];
const arrayD = [1, 3, 2, 300];

let score = 0;

if (getProduct(arrayA) === 120) score++;
if (getProduct(arrayB) === 21) score++;
if (getProduct(arrayC) === 4000) score++;
if (getProduct(arrayD) === 1800) score++;

if (highestProduct([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
if (highestProduct([arrayA, arrayB]) === 0) score++;
if (highestProduct([arrayA, arrayD]) === 1) score++;

console.log("You have scored " + score + "/7 points.");
