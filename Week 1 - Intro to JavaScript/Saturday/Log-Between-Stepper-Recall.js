/*Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters. 
The function should print out numbers between min and max at step intervals. See the following examples. 
Hint: this function only needs to print using console.log it does not need to return.*/

function logBetweenStepper(min, max, step) {
  if (min > max || step <= 0) {
    console.log("Invalid input. Please make sure min is less than max and step is greater than 0.");
    return;
  }

  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
}

// Example usage:
logBetweenStepper(1, 10, 2);


// Examples:
logBetweenStepper(5, 9, 1); // prints out:
5
6
7
8
9


logBetweenStepper(-10, 15, 5)  // prints out:
-10
-5
0
5
10
15
