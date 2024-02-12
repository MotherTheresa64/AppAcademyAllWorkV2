/*Write a function popper(array, num) that takes in an array and a number as args. The function should remove the last num elements from the array, mutating the original array. The function should return a new array containing the elements that were removed. 

Define this function using function expression syntax.*/

const popper = function(array, num) {
  // Check if num is greater than the length of the array
  if (num >= array.length) {
    return array.splice(0); // Return a copy of the entire array and empty the original array
  }

  // Use splice to remove the last num elements and store them in a new array
  const removedElements = array.splice(-num);

  return removedElements;
};


let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]
