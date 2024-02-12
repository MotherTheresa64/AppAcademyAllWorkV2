/*Write a function breakDownObj(obj) that takes in an object as a parameter
and returns an array containing:  all the keys from the object and all the
values of the object.
Hint: Use spread syntax to spread out elements into an array!*/

function breakDownObj(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return [...keys, ...values];
  }
  
  // Example usage:
  const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  const resultArray = breakDownObj(myObject);
  console.log(resultArray);
  