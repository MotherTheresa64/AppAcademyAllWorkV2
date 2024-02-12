/*Write a function avgVal(arr) that accepts an array as an arg. 
The function should return the average of all values in the array. 
If the array is empty, it should return null.*/

function avgVal(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return null;
  }

  // Calculate the sum of all values in the array
  const sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);

  // Calculate the average by dividing the sum by the number of elements
  const average = sum / arr.length;

  return average;
}


console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
