/*Write a function catBuilder(name, color, toys) that returns a cat object object with the corresponding properties.*/

function catBuilder(name, color, toys) {
    return {
      name: name,
      color: color,
      toys: toys,
    };
  }
  
  // Example usage:
  const myCat = catBuilder('Whiskers', 'Gray', ['Mouse', 'Feather']);
  console.log(myCat);
  