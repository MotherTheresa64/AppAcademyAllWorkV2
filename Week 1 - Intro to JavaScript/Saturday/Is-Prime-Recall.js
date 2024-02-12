/* Define a function isPrime(number) that returns true if number is prime. Otherwise, false. 
A number is prime if it is only divisible by 1 and itself.*/

function isPrime(number) {
  if (number <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  if (number === 2) {
    return true; // 2 is a prime number
  }

  // Check for divisibility by numbers from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Number is divisible by i, so it's not prime
    }
  }

  return true; // Number is prime
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
