/*Given the array friends below, use the Array.map() method to map the
current array to an array of booleans representing whether or not the friend
has been friends with the user for more than 5 years. Then print the newly
mapped array.*/

const friends = [
    { name: 'Albert', yearsOfFriendship: 3 },
    { name: 'Becky', yearsOfFriendship: 5 },
    { name: 'Charlie', yearsOfFriendship: 2 },
  ];
  
  const hasBeenFriendsForMoreThan5Years = friends.map(friend => friend.yearsOfFriendship > 5);
  
  console.log(hasBeenFriendsForMoreThan5Years);
  