/*Write a function threeOrSeven that takes in a number and returns true if the number is divisible by either 3 or 7 and false otherwise. 

Write two versions of this function, using conditionals (if) and without using conditionals.*/

function threeOrSevenWithConditionals(number) {
  if (number % 3 === 0 || number % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(threeOrSeven(3));   // => true
console.log(threeOrSeven(42));  // => true
console.log(threeOrSeven(8));   // => false

function threeOrSevenWithoutConditionals(number) {
  return number % 3 === 0 || number % 7 === 0;
}

console.log(threeOrSeven(3));   // => true
console.log(threeOrSeven(42));  // => true
console.log(threeOrSeven(8));   // => false
