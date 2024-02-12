/*Given the object below, print out the values corresponding to each key
individually. Try using both dot and bracket notation where they're appropriate.*/

const obj = {
    "first key": "1",
    second: 2,
    "third_key": "three"
  };
  
  // Using dot notation
  console.log(obj.second); // Output: 2
  
  // Using bracket notation (note that you must use quotes for keys with spaces)
  console.log(obj["first key"]); // Output: '1'
  console.log(obj["second"]); // Output: 2
  console.log(obj["third_key"]); // Output: 'three'
  