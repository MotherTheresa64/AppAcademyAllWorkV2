/*Given an object that has other objects nested inside of it, write a function
that takes that object and returns all values that are at a depth of 2.*/

function getValuesAtDepth2(obj, depth = 0) {
    const values = [];
  
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        if (depth === 2) {
          values.push(obj[key]);
        } else {
          values.push(...getValuesAtDepth2(obj[key], depth + 1));
        }
      }
    }
  
    return values;
  }
  
  // Example usage:
  const nestedObject = {
    key1: {
      key1a: 'value1a',
      key1b: 'value1b',
      key1c: {
        key1ca: 'value1ca',
        key1cb: 'value1cb',
      },
    },
    key2: {
      key2a: 'value2a',
      key2b: 'value2b',
    },
  };
  
  const valuesAtDepth2 = getValuesAtDepth2(nestedObject);
  console.log(valuesAtDepth2);
  