/*Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. 
The functions should return the smallest number that is divisible by both num1 and num2.*/

function leastCommonMultiple(num1, num2) {
  // Calculate the greatest common divisor (GCD) using the Euclidean algorithm
  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Calculate the LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
  return (num1 * num2) / gcd(num1, num2);
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
