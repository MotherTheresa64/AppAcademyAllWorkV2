/*Write a function combineArray(array1, array2) that takes in two arrays of numbers and returns the two arrays combined into a single array. 

Hint: Use the Array.concat method but be aware that calling this method won't permanently change, also known as mutate, either array.*/

function combineArray(array1, array2) {
  // Use the concat method to combine the two arrays into a new array
  const combinedArray = array1.concat(array2);
  
  return combinedArray;
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]