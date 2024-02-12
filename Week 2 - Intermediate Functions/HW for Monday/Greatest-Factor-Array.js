/*Write a function greatestFactorArray that takes in an array of numbers and returns a new array where every even number is replaced with it's greatest factor. A greatest factor is the largest number that divides another with no remainder. For example, the greatest factor of 16 is 8. (For the purpose of this problem we won't say the greatest factor of 16 is 16, because that would be too easy).*/

function greatestFactor(number) {
    if (number <= 2) {
      return 1; // Special case: The greatest factor of 2 is 1
    }
  
    for (let i = number / 2; i >= 2; i--) {
      if (number % i === 0) {
        return i; // Found the greatest factor
      }
    }
  
    return 1; // If no other factor is found, the greatest factor is 1
  }
  
  function greatestFactorArray(arr) {
    const result = [];
  
    for (let number of arr) {
      if (number % 2 === 0) {
        result.push(greatestFactor(number));
      } else {
        result.push(number);
      }
    }
  
    return result;
  }
  
  console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
  console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
  