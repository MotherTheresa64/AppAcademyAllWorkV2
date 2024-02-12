/*Write a function choosePrimes(nums) that takes in an array of numbers as args. 
The function should return a new array containing the primes from the original array. 
A prime number is a number that is only divisible by 1 and itself. 
Hint: consider creating a helper function to check if a number is prime!*/

// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Main function to choose prime numbers from an array
  function choosePrimes(nums) {
    return nums.filter(isPrime);
  }
  
  
  
  console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
  console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
