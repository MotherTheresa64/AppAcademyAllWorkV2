/*Write a function prime that takes in a number and returns a boolean, indicating whether the number is prime. A prime number is only divisible by 1 and itself.*/

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
