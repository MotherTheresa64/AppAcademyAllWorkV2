/*Write a function valInObject that accepts an object, obj, and a value
The function should return true if that value is indeed a value in the object, or false otherwise.*/

function valInObject(obj, value) {
    for (const key in obj) {
      if (obj[key] === value) {
        return true;
      }
    }
    return false;
  }
  
  // Example usage:
  const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  console.log(valInObject(myObject, 'John')); // Output: true
  console.log(valInObject(myObject, 'Paris')); // Output: false
  