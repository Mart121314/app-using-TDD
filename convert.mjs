import { testConversionFunctions } from "./testconverter.mjs";

const processArguments = process.argv;
const inches = parseFloat(processArguments[2]);
const output = processArguments[3].toLowerCase();

export function convertInches(inches, output) {
  if (output === "-mm") {
    return inchToMM(inches).toFixed(2);
  } else if (output == "-cm") {
    return inchToCM(inches).toFixed(2);
  } else if (output == "-m") {
    return inchToM(inches).toFixed(2);
  } else if (output == "-micrometer") {
    return inchToMicrometer(inches).toFixed(2);
  } else if (output == "-nm") {
    return inchToNanometer(inches).toFixed(2);
  } else if (output == "-t") {
    testConversionFunctions();
  } else {
    console.log("Please enter a valid output");
    return null;
  }
}

export function inchToMM(inches) {
  return inches * 25.4;
}

export function inchToCM(inches) {
  return inches * 2.54;
}

export function inchToM(inches) {
  return inches * 0.0254;
}

export function inchToMicrometer(inches) {
  return inches * 25400;
}

export function inchToNanometer(inches) {
  return inches * 2.54e7;
}

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

