/*Given the array, arr, and object, obj, use rest and spread to clone them
into arrRest/arrSpread and objRest/objSpread respectively.*/

const arr = [1, 2, 3, 4, 5];
const obj = { name: 'John', age: 30, city: 'New York' };

// Clone the array using rest and spread
const arrRest = [...arr];

// Clone the object using rest and spread
const objRest = { ...obj };

console.log(arrRest); // Cloned array: [1, 2, 3, 4, 5]
console.log(objRest); // Cloned object: { name: 'John', age: 30, city: 'New York' }
