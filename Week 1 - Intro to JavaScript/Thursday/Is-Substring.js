/*In JavaScript the String.indexOf() method allows you to get the index of a value within an Array-like structure, including strings. 

Write a function isSubstring that takes in two strings, searchString and subString. 
The function should return true if subString is a part of thesearchString, regardless of upper or lower case, and false if otherwise.*/

function isSubstring(searchString, subString) {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerSearchString = searchString.toLowerCase();
  const lowerSubString = subString.toLowerCase();
  
  // Use indexOf to check if lowerSubString is present in lowerSearchString
  return lowerSearchString.indexOf(lowerSubString) !== -1;
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false
