const processArguments = process.argv;

if(processArguments.length < 4){
console.log("Please enter a valid input and output");
} else{

const inches = parseFloat(processArguments[2]);
const output = processArguments[3].toLowerCase();


    function inchToMM(inches) {
      return inches * 25.4;
    }
    
    function inchToCM(inches){
      return inches * 2.54;
    }

    function inchToM(inches){
      return inches * 0.0254;
    }
    
    function inchToMicrometer(inches){
      return inches * 25400;
    }
    
    function inchToNanometer(inches){
      return inches * 2.54e+7;
    }
 
    function convertInches (inches,output){
      if (output === "-mm"){
        return (inchToMM(inches)).toFixed(2);
      } else if (output == "-cm"){
        return (inchToCM(inches)).toFixed(2);
      } else if (output == "-m"){
        return (inchToM(inches)).toFixed(2);
      } else if (output == "-micrometer"){
        return (inchToMicrometer(inches)).toFixed(2);
      } else if (output == "-nanometer"){
        return (inchToNanometer(inches)).toFixed(2);
      } else if (output == "-t"){
        testConversionFunctions();
      } else { 
        console.log("Please enter a valid output")
        return null;
    }
}

    const result = convertInches(inches,output);
    if (result !== null){
      console.log(result);
    } 
}
    
export { convertInches, inchToMM, inchToCM, inchToM, inchToMicrometer, inchToNanometer };