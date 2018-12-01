const fs = require("fs");

const input = fs
  .readFileSync("./input")
  .toString()
  .split("\n")
  .slice(0, -1);

const result = input.reduce(
  (accumulator, current) => accumulator + parseInt(current, 10),
  0
);
console.log(result);
