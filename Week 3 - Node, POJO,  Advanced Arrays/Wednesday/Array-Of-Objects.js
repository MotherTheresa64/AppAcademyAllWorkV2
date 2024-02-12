/*In this practice, you will practice navigating objects that are nested within
an array. Given the below array, write a function printNames that prints the
name of every object in the array.*/

const peopleArray = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];
  
  function printNames(arr) {
    for (const person of arr) {
      console.log(person.name);
    }
  }
  
  // Example usage:
  printNames(peopleArray);
  