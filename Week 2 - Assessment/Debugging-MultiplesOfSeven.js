/*This problem is worth 4 points. 
You may receive partial credit.
 Your friend is working on a function called multiplesOfSeven()
which returns an array containing all integers below that number that are
multiples of seven (for example: 7, 14, 21, etc...). The array should be ordered
from smallest to highest. Unfortunately, the code is not working correctly. Help
them fix it! */

function multiplesOfSeven(num) {
    const result = [];

    for (let i = 7; i < num; i += 7) {
        result.push(i);
    }

    return result;
}
/* SCORING: DO NOT MODIFY ANYTHING BELOW THIS LINE */
let score = 0;

const arrComparison = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let i = 0;
  while (i < arr1.length) {
    if (arr1[i] !== arr2[i]) return false;
    i++;
  }
  return true;
}

if (arrComparison(multiplesOfSeven(85), [ 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84])) score++;
if (arrComparison(multiplesOfSeven(15), [ 7, 14 ])) score++;
if (arrComparison(multiplesOfSeven(7), [ 7 ])) score++;
if (arrComparison(multiplesOfSeven(1), [])) score++;

console.log("You have scored " + score + "/4 points.");
