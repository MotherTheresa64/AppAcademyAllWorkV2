/*Use recursion to refactor this iterative solution. First read the
iterative_solution function and analyze what is happening. Then write the
function recursive_solution to accomplish the same result using recursion
instead of iteration. When complete, recursive_solution(data) should return
the exact same result as iterative_solution(data).*/

function recursiveSolution(data, index = 0, result = { complete: [], incomplete: [] }) {
    if (index === data.length) {
      return result;
    }
  
    const person = data[index];
    if (person.isComplete) {
      result.complete.push(person.name);
    } else {
      result.incomplete.push(person.name);
    }
  
    return recursiveSolution(data, index + 1, result);
  }
  
  const data1 = [
    { name: "Johann", score: 0, isComplete: true },
    { name: "Vanessa", score: 50, isComplete: false },
    { name: "Ryder", score: 90, isComplete: true },
    { name: "Dwayne", score: 100, isComplete: true },
    { name: "Bekah", score: 0, isComplete: true }
  ];
  
  console.log(recursiveSolution(data1));

  // This recursive solution will produce the same result as the iterativeSolution function.
  