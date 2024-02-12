/*Given the array friends below, use the Array.forEach() method to iterate through each element and print the name and yearsOfFriendship properties stylized as "name: yearsOfFriendship years".
For example: "Albert: 3 years"*/

const friends = [
    { name: 'Albert', yearsOfFriendship: 3 },
    { name: 'Becky', yearsOfFriendship: 5 },
    { name: 'Charlie', yearsOfFriendship: 2 },
  ];
  
  friends.forEach(friend => {
    console.log(`${friend.name}: ${friend.yearsOfFriendship} years`);
  });
  