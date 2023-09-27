import { convertInches } from "./convert.mjs";

let min = 0;
let max = 0;

if (isThisRunningInBrowser()) {
   const bt = document.getElementById("convertButton");
   bt.addEventListener("click", () => {
        const inches = document.getElementById("inches").value;
        const output = document.getElementById("output").value;
        const result = convertInches(inches, output);
        document.getElementById("result").innerHTML = result;
    });
}

console.log(outputNumber(min, max));

function getLimits() {
    if (isThisRunningInBrowser()) {
        min = document.getElementById("min").value;
        max = document.getElementById("max").value;
    } else {
        min = process.argv[2];
        max = process.argv[3];
    }
    min = parseFloat(min);
    max = parseFloat(max);
}

function outputNumber() {
    return convertInches(min, max);
}

function isThisRunningInBrowser() {
    try {
        if (document) {
            return true;
        }
    } catch (error) {
        return false;
    }
    return false;
}

export { getLimits, outputNumber };