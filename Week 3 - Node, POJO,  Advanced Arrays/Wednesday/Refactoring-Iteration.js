/*Given the function below that iterates through an object and prints all values
associated with keys that are vowels using Object.keys(), refactor the code
to use the for...in pattern to iterate through the object.
Key point here is to note how there are multiple ways to iterate through an
object that are interchangeable. Comment out the original function to run your refactored function.*/

function printVowelValues(obj) {
    for (const key in obj) {
      const firstChar = key[0].toLowerCase();
      if ('aeiou'.includes(firstChar)) {
        console.log(obj[key]);
      }
    }
  }
  
  // Example usage:
  const myObject = {
    name: 'John',
    age: 30,
    city: 'New York',
    occupation: 'Teacher',
  };
  
  printVowelValues(myObject);
  