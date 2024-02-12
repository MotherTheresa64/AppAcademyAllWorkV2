/*In this exercise, you will learn to use the Array.find() method which will be useful to know. 
The Array.find() method accepts a callback function that specifies the "find" condition(s) and returns the first element that satisfies the condition(s). 
Check out the documentation here.
Given the friends array below, use the Array.find() method to get the first friend whose name contains 3 or more vowels and print their name.*/

const friends = [
    { name: 'Albert' },
    { name: 'Becky' },
    { name: 'Anna' },
    { name: 'Charlie' },
    { name: 'Olivia' },
  ];
  
  const friendWith3OrMoreVowels = friends.find(friend => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const name = friend.name.toLowerCase();
    const vowelCount = name.split('').filter(char => vowels.includes(char)).length;
    return vowelCount >= 3;
  });
  
  if (friendWith3OrMoreVowels) {
    console.log(friendWith3OrMoreVowels.name);
  } else {
    console.log('No friend with 3 or more vowels in their name found.');
  }
  