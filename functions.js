import { testConversionFunctions } from "./testconverter.mjs";
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
