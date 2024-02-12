/*Write a function initials(name) that accepts a full name as an arg. 
The function should return the initials for that name.*/

function initials(name) {
  // Split the name into an array of words
  const words = name.split(' ');

  // Initialize a variable to store the initials
  let initialsString = '';

  // Iterate through the words to extract initials
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    initialsString += word[0].toUpperCase();
  }

  return initialsString;
}


console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'
