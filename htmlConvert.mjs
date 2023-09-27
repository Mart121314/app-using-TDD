import { convertInches, inchToMM, inchToCM, inchToM, inchToMicrometer, inchToNanometer } from "./convert.mjs";

function convert() {
    console.log(convert()); 

    const inchesInput = parseFloat(document.getElementById("inchesInput").value);
    const outputSelect = document.getElementById("output");
    const selectedOutput = outputSelect.options[outputSelect.selectedIndex].value;

    const conversionFunctions = {
        "mm": inchToMM,
        "cm": inchToCM,
        "m": inchToM,
        "micrometer": inchToMicrometer,
        "nm": inchToNanometer
    };

    let result;

    if (isNaN(inchesInput)) {
        result = "Please enter a valid number";
    } else {
        const conversionFunction = conversionFunctions[selectedOutput];
        if (conversionFunction) {
            result = conversionFunction(inchesInput).toFixed(2) + " " + selectedOutput;
        } else {
            result = "Please enter a valid output";
        }
    }

    document.getElementById("Result").textContent = result;
}