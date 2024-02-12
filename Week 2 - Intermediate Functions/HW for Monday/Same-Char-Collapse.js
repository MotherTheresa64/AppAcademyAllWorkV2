/*Write a function sameCharCollapse that takes in a string and returns a collapsed version of the string. 
To collapse the string, we repeatedly delete 2 adjacent characters that are the same until there are no such adjacent characters. 
If there are multiple pairs that can be collapsed, delete the leftmost pair. 
For example, we take the following steps to collapse "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy*/

function sameCharCollapse(str) {
  let result = str;

  // Helper function to find and remove the leftmost pair of adjacent same characters
  function removeAdjacentPair(input) {
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] === input[i + 1]) {
        // Remove the adjacent pair by slicing the string
        input = input.slice(0, i) + input.slice(i + 2);
        return input;
      }
    }
    return input;
  }

  // Repeat the removal process until no adjacent pairs are found
  let prevLength = result.length;
  let currentLength = result.length;

  do {
    prevLength = currentLength;
    result = removeAdjacentPair(result);
    currentLength = result.length;
  } while (currentLength < prevLength);

  return result;
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
