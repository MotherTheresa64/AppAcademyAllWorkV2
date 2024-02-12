/*Write a function includedInObject that accepts an object, obj, and a key
and returns true if that key exists on the object or false otherwise.*/

function includedInObject(obj, key) {
    return obj.hasOwnProperty(key);
  }
  
  // Example usage:
  const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  console.log(includedInObject(myObject, 'name')); // Output: true
  console.log(includedInObject(myObject, 'gender')); // Output: false
  