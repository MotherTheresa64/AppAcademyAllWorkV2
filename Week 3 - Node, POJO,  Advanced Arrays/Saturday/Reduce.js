/*Given the friends array, use the Array.reduce() method to get and print the sum of all the years of friendship with all the friends in the array.*/

const friends = [
    { name: 'Albert', yearsOfFriendship: 7 },
    { name: 'Becky', yearsOfFriendship: 5 },
    { name: 'Anna', yearsOfFriendship: 6 },
    { name: 'Charlie', yearsOfFriendship: 2 },
  ];
  
  const totalYearsOfFriendship = friends.reduce((sum, friend) => sum + friend.yearsOfFriendship, 0);
  
  console.log('Total years of friendship:', totalYearsOfFriendship);
  