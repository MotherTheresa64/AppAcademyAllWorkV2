/*Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the maximum value in each column. 
The array length should be equal to the number of columns, such that returnArrayi is equal to the max value in the ith column.*/

function maxColumn(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const columnMaxValues = new Array(numCols).fill(-Infinity);

  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      if (matrix[row][col] > columnMaxValues[col]) {
        columnMaxValues[col] = matrix[row][col];
      }
    }
  }

  return columnMaxValues;
}

// Example usage:
const matrix = [
  [3, 8, 2],
  [1, 6, 9],
  [4, 7, 5]
];

const maxValues = maxColumn(matrix);
console.log(maxValues); // Output: [4, 8, 9]
