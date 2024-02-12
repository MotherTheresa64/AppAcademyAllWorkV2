/*Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and returns the total sum of all numbers.*/

function twoDimensionalSum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      total += arr[i][j];
    }
  }

  return total;
}


let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6
