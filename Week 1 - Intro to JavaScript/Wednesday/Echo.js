/*Write a function echo that takes in a string and console.logs that string "echo-ized".*/

function echo(string) {
  let upper = string.toUpperCase()
  let lower = string.toLowerCase()
  let finalString = upper + " ... " + string + " ... " + lower
  console.log(finalString)
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
