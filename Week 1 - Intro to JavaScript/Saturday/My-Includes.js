/*Write a function myIncludes(arr, target) that accepts an array and a target value as args. The function should return a boolean indicating whether the target is found in the array. 
Solve this without Array.includes or Array.indexOf.*/

function myIncludes(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true; // Found the target, return true
    }
  }
  return false; // Target not found, return false
}


console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false
