/*Write a function that takes a location, either "FRONT" or "BACK" and removes the element at either the front or back of the given array. 
If location is anything besides "FRONT" or "BACK", print an error. Your function should not return anything and should mutate the original array. 
(Hint: Look up the JavaScript functions: push/pop/shift/unshift)*/


function removeElement(array, location) {
  if (location === "FRONT") {
    array.shift(); // Remove the element from the front of the array
  } else if (location === "BACK") {
    array.pop(); // Remove the element from the back of the array
  } else {
    console.error("Error: Invalid location. Use 'FRONT' or 'BACK'.");
  }
}

testArray = [0,1,2,3,4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]
