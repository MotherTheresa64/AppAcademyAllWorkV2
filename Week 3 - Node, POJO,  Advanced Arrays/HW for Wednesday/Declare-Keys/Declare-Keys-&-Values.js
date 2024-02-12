/*Given the following declaration of an object, obj below, declare values so
that the print statements output what is expected. Try using both dot and bracket notation.*/ 

const obj = {};

obj.firstKey = 'firstValue';
obj.numeric = 2;
obj.boolean = false;
obj.object = {};

console.log(obj['firstKey']);   // Output: 'firstValue'
console.log(obj['numeric']);    // Output: 2
console.log(obj['boolean']);    // Output: false
console.log(obj['object']);     // Output: {}
