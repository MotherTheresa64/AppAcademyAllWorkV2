/*Write a function named restSum that accepts all incoming parameters and sums them.
Hint: Use rest parameter syntax!*/

function restSum(...args) {
    return args.reduce((total, current) => total + current, 0);
  }
  
  // Example usage:
  console.log(restSum(1, 2, 3, 4, 5)); // Output: 15
  console.log(restSum(10, 20, 30)); // Output: 60
  console.log(restSum(5, 10)); // Output: 15
  