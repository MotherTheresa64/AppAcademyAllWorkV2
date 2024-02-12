/*Write a function makeAddLib(verb, adj, noun) that accepts three strings. 
Use string interpolation to return a new wacky string using the three string args.  See the examples for more information.*/

function makeAddLib(verb, adj, noun) {
    return `I ${verb} ${adj} ${noun}. It was so ${adj}!`;
  }
  
  // Examples:
  const sentence1 = makeAddLib("ate", "delicious", "pizza");
  console.log(sentence1); // "I ate delicious pizza. It was so delicious!"
  
  const sentence2 = makeAddLib("found", "cute", "puppy");
  console.log(sentence2); // "I found cute puppy. It was so cute!"
  