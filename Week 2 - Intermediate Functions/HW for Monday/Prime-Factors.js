/*Write a function primeFactors that accepts a number as an argument. The function should return an array containing all of the prime numbers that can divide the given number.*/

function isPrime(number) {
  if (number <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  if (number <= 3) {
    return true; // 2 and 3 are prime numbers
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false; // Numbers divisible by 2 or 3 are not prime (except 2 and 3)
  }

  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false; // Numbers divisible by i or (i + 2) are not prime
    }
    i += 6;
  }

  return true; // The number is prime
}

function primeFactors(number) {
  const factors = [];

  for (let i = 2; i <= number; i++) {
    while (number % i === 0 && isPrime(i)) {
      factors.push(i);
      number /= i;
    }
  }

  return factors;
}

console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]
