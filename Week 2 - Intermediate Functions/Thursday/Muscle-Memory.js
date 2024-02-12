/*Practice typing the syntax for functions. Write 10 functions with different messages and console.log them. 
Focus on using proper style and indentation. Be sure to test your code by running it after each repetition. 
You'll be surprised and also annoyed at what details you missed! Learn from those typos now and make your life easier.*/

// Function 1
function greetMorning() {
  console.log("Good morning!");
}
greetMorning();

// Function 2
function greetEvening() {
  console.log("Good evening!");
}
greetEvening();

// Function 3
function calculateSquareArea(side) {
  const area = side * side;
  console.log(`The area of a square with side ${side} is ${area}.`);
}
calculateSquareArea(5);

// Function 4
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
sayHello("Alice");

// Function 5
function findLargestNumber(numbers) {
  const max = Math.max(...numbers);
  console.log(`The largest number in the array is: ${max}`);
}
findLargestNumber([8, 3, 11, 4, 7]);

// Function 6
function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  const result = word === reversedWord ? "a palindrome" : "not a palindrome";
  console.log(`"${word}" is ${result}.`);
}
isPalindrome("racecar");

// Function 7
function calculateFactorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log(`The factorial of ${n} is ${factorial}.`);
}
calculateFactorial(5);

// Function 8
function generateRandomNumber(min, max) {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`Random number between ${min} and ${max}: ${random}`);
}
generateRandomNumber(1, 10);

// Function 9
function repeatString(str, times) {
  let repeatedStr = "";
  for (let i = 0; i < times; i++) {
    repeatedStr += str;
  }
  console.log(`"${str}" repeated ${times} times: "${repeatedStr}".`);
}
repeatString("Hello", 3);

// Function 10
function reverseArray(arr) {
  const reversedArr = arr.slice().reverse();
  console.log("Original array:", arr);
  console.log("Reversed array:", reversedArr);
}
reverseArray([1, 2, 3, 4, 5]);
