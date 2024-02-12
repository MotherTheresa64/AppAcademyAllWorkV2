/*Given the object below, use Object.keys() to iterate through the object and
print all its values.*/

const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  const keys = Object.keys(myObject);
  
  for (const key of keys) {
    console.log(myObject[key]);
  }
  