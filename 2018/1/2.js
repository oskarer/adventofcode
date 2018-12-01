const fs = require("fs");

const input = fs
  .readFileSync("./input")
  .toString()
  .split("\n")
  .slice(0, -1);

const seenFrequencies = {};
let counter = 0;
let frequency = 0;

while (true) {
  frequency = frequency + parseInt(input[counter % input.length], 10);
  if (seenFrequencies[frequency]) break;
  else seenFrequencies[frequency] = true;
  counter++;
}

console.log(frequency);
