/*Write a function that accepts and object, obj, and uses Object.values to print all values in the object.*/

function printObjectValues(obj) {
    const values = Object.values(obj);
    for (const value of values) {
      console.log(value);
    }
  }
  
  // Example usage:
  const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  printObjectValues(myObject);
  