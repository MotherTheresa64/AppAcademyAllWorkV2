/*Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. 
The functions should return the smallest number that is divisible by both num1 and num2.*/

function leastCommonMultiple(num1, num2) {
  // Helper function to calculate the greatest common divisor (GCD)
  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }

  // Calculate the LCM using the GCD formula
  return (num1 * num2) / gcd(num1, num2);
}



console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
