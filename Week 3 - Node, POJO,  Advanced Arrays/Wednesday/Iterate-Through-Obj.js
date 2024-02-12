/*Write a function printObject(obj) that prints out all key-value pairs of an object. The format should be key - value. 
HINT: use a for loop*/

function printObject(obj) {
    for (const key in obj) {
      console.log(key + ' - ' + obj[key]);
    }
  }
  
  // Example usage:
  const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  printObject(myObject);
  