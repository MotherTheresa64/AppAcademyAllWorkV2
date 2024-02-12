/*Given the array friends below, use the Array.filter() method to filter the array to only contain friends whose name starts with an "A" and who has been friends for over 5 years. 
Then print the filtered array.*/

/*Given the array friends below, use the Array.filter() method to filter the array to only contain friends whose name starts with an "A" and who has been friends for over 5 years. 
Then print the filtered array.*/

const friends = [
    { name: 'Albert', yearsOfFriendship: 7 },
    { name: 'Becky', yearsOfFriendship: 5 },
    { name: 'Anna', yearsOfFriendship: 6 },
    { name: 'Charlie', yearsOfFriendship: 2 },
  ];
  
  const filteredFriends = friends.filter(friend => friend.name[0] === 'A' && friend.yearsOfFriendship > 5);
  
  console.log(filteredFriends);
  