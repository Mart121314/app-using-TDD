import {
  convertInches,
  inchToMM,
  inchToCM,
  inchToM,
  inchToMicrometer,
  inchToNanometer,
} from "./functions.js";

const processArguments = process.argv;
const inches = parseFloat(processArguments[2]);
const output = processArguments[3].toLowerCase();



const result = convertInches(inches, output);
if (result !== null) {
  console.log(result);
}

if (processArguments.length < 4) {
  console.log("Please enter a valid input and output");
} else {
  inchToMM(inches);

  inchToCM(inches);

  inchToM(inches);

  inchToMicrometer(inches);

  inchToNanometer(inches);

  convertInches(inches, output);
}
