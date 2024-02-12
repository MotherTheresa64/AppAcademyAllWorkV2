/*The function `longestName() takes an array of names and returns the longest. If there's a tie, it returns the first name of the longest length. 
However, this implementation is full of bugs! Use your debugging skills to find and fix those bugs.*/

function longestName(names) {
  // Initialize the longest variable to an empty string
  let longest = "";

  // Iterate through each name in the array
  for (let i = 0; i < names.length; i++) {
    const currentName = names[i];

    // Compare the length of the current name with the length of the longest name
    if (currentName.length > longest.length) {
      longest = currentName;
    }
  }

  // Return the longest name
  return longest;
}

// Example usage:
testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
             "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
             "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

console.log(longestName(testNames)); // "Christopher"
