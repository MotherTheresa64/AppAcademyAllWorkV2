/*Define a function isPrime(number) that returns true if number is prime. Otherwise, false. 
A number is prime if it is only divisible by 1 and itself.*/
function isPrime(number) {
  // Check for special cases: 0, 1, and negative numbers are not prime
  if (number <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Found a divisor, not prime
    }
  }

  return true; // No divisors found, prime
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
