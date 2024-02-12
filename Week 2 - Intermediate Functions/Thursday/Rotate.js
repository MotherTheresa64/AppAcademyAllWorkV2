/*Write a function rotate(array, num) that takes in an array and a number as args. When the num is positive, the elements of the array should be rotated to the right. When the num is negative, the elements of the array should be rotated to the left. The function should mutate the original array. 

Define this function using function expression syntax.*/

const rotate = function(array, num) {
  if (num > 0) {
    // Rotate to the right
    for (let i = 0; i < num; i++) {
      const lastElement = array.pop();
      array.unshift(lastElement);
    }
  } else if (num < 0) {
    // Rotate to the left
    num = Math.abs(num);
    for (let i = 0; i < num; i++) {
      const firstElement = array.shift();
      array.push(firstElement);
    }
  }
  // If num is 0, the array remains unchanged.
};

// Example usage:
const myArray = [1, 2, 3, 4, 5];
rotate(myArray, 2); // Rotates to the right by 2
console.log(myArray); // Output: [4, 5, 1, 2, 3]

rotate(myArray, -1); // Rotates to the left by 1
console.log(myArray); // Output: [5, 1, 2, 3, 4]
