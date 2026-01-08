const height = 5;

for (let row = 1; row <= height; row++) {
  let line = "";

  for (let s = 1; s <= height - row; s++) {
    line += " ";
  }

  for (let k = 1; k <= 2 * row - 1; k++) {
    line += "*";
  }

  console.log(line);
}
