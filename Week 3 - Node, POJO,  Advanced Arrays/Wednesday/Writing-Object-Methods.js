/*Given an object, obj, declare a method, printValues on obj that prints all unique values within the object.*/

const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value1', // Repeated value
    key4: 'value3',
  };
  
  obj.printValues = function () {
    const uniqueValues = new Set(Object.values(this));
    for (const value of uniqueValues) {
      console.log(value);
    }
  };
  
  // Example usage:
  obj.printValues();
  