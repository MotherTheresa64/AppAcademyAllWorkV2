/*Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix) and returns the largest value in the matrix. The matrix contains at least one value.*/

function maxInMatrix(matrix) {
  // Initialize the maximum value with the first element of the matrix
  let max = matrix[0][0];

  // Iterate through the matrix to find the maximum value
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > max) {
        max = matrix[row][col];
      }
    }
  }

  return max;
}

// Example usage:
const matrix = [
  [3, 8, 2],
  [1, 6, 9],
  [4, 7, 5]
];

const maxValue = maxInMatrix(matrix);
console.log(maxValue); // Output: 9
