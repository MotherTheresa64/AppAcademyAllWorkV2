/*Given the object below, delete the key-value pair such that "{}" is printed
when printing the object.*/

const myObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};

// Delete all key-value pairs
for (const key in myObject) {
  delete myObject[key];
}

// Print the modified object
console.log(myObject); // Output: {}
