/*Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. 
The function should return the total product of all numbers multiplied together.*/

function twoDimensionalProduct(array) {
  // Initialize a variable to store the total product
  let totalProduct = 1;

  // Iterate through the rows of the 2D array
  for (let i = 0; i < array.length; i++) {
    // Iterate through the elements of each row
    for (let j = 0; j < array[i].length; j++) {
      totalProduct *= array[i][j];
    }
  }

  return totalProduct;
}


let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
