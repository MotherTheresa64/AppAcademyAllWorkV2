/*Write a function that accepts an object, obj, and a string, str and prints
the value from the object at the key str.*/

function printValue(obj, key) {
    if (obj.hasOwnProperty(key)) {
      console.log(obj[key]);
    } else {
      console.log(`Key '${key}' not found in the object.`);
    }
  }
  
  // Example usage:
  const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  printValue(myObject, 'name'); // Output: 'John'
  printValue(myObject, 'age');  // Output: 30
  printValue(myObject, 'gender');  // Output: 'Key 'gender' not found in the object.'
  