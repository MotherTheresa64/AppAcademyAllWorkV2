/*The "Your Code" tab shows a solution for the Anagrams problem. Anagrams are words that contain the same characters but not necessarily in the same order. 
The function returns true if word1 and word2 are anagrams.
This solution only uses the var to declare all variables. The code runs as expected, but could be improved. Refactor this solution to only use let and const instead of var.*/

function areAnagrams(word1, word2) {
    const cleanWord1 = word1.replace(/[^a-z]/gi, '').toLowerCase();
    const cleanWord2 = word2.replace(/[^a-z]/gi, '').toLowerCase();
    
    if (cleanWord1.length !== cleanWord2.length) {
        return false;
    }
    
    const charCount = {};
    
    for (const char of cleanWord1) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    for (const char of cleanWord2) {
        if (charCount[char]) {
            charCount[char]--;
        } else {
            return false;
        }
    }
    
    return true;
}

// Test cases
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("hello", "world")); // false
