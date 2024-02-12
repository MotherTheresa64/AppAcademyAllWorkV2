/*Write a function commonFactors that accepts two numbers as arguments.
The function should return an array containing positive numbers that are able to divide both arguments.*/

function commonFactors(num1, num2) {
  const smallerNumber = Math.min(num1, num2);
  const factors = [];

  for (let i = 1; i <= smallerNumber; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

// Example usage:
const number1 = 12;
const number2 = 18;
const commonFactorsArray = commonFactors(number1, number2);
console.log(commonFactorsArray); // Output: [1, 2, 3, 6]
