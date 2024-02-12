/*Given the object below, use Object.keys() to iterate through the object and
print the key if there are 2 or more "c"s within the value.*/

const myObject = {
    name: 'Coco',
    age: 32,
    city: 'Chicago',
    description: 'Cats are cool',
    occupation: 'Doctor',
  };
  
  const keys = Object.keys(myObject);
  
  for (const key of keys) {
    const value = myObject[key];
    const countC = (value.match(/c/gi) || []).length; // Case-insensitive 'c' count
  
    if (countC >= 2) {
      console.log(key);
    }
  }
  