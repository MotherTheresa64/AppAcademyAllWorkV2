/*Write a function allElseEqual that takes in an array of numbers. 
The function should return the element of the array that is equal to half of the sum of all elements of the array. 
If there is no such element, the method should return null.*/

function allElseEqual(numbers) {
    // Calculate the sum of all elements in the array
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const halfSum = sum / 2;
  
    // Find the element that is equal to half of the sum
    const equalHalfElement = numbers.find((num) => num === halfSum);
  
    return equalHalfElement !== undefined ? equalHalfElement : null;
  }
  
  console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
  console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
  console.log(allElseEqual([1, 2, 3, 4]));     // null
