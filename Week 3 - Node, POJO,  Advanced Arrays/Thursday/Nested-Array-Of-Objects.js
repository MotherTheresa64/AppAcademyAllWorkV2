/*Given the nested array of objects below, write a function, getSecondObjValues,
that prints the value of the second object within each nested sub-array. If there is no second object, print null.*/

function getSecondObjValues(arr) {
    for (const subArray of arr) {
      if (subArray.length >= 2) {
        console.log(subArray[1]);
      } else {
        console.log(null);
      }
    }
  }
  
  // Example usage:
  const nestedArray = [
    [{ key1: 'value1' }, { key2: 'value2' }],
    [{ key3: 'value3' }],
    [],
  ];
  
  getSecondObjValues(nestedArray);
  