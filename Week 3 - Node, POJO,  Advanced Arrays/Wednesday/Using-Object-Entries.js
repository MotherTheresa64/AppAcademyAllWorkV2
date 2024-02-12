/*Write a function that takes in an object that uses car owners' names as keys
and the car brand they own as values. The function should print the names of the owners whose names are strictly longer than 5 characters and who own a "Honda".
Note: Use Object.entries to make your life easier!*/

function filterCarOwners(obj) {
    for (const [owner, car] of Object.entries(obj)) {
      if (owner.length > 5 && car === 'Honda') {
        console.log(owner);
      }
    }
  }
  
  // Example usage:
  const carOwners = {
    'Alice': 'Toyota',
    'Bob': 'Honda',
    'Charlie': 'Honda',
    'David': 'Ford',
    'Eve': 'Honda',
  };
  
  filterCarOwners(carOwners);
  