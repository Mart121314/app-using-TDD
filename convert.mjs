function inchToMMTest() {
if (inchToMM(1) == 25.4){
  console.log("Test passed");
} else {
  console.error("Test failed");
}
}

function inchToMM(inches) {
  return inches * 25.4;
}

inchToMMTest();

function inchToCMTest(){
  if (inchToCM(1) == 2.54){
    console.log("Test passed :)");
  } else {
    console.error("Test failed :(");
  }
}
function inchToCM(inches){
  return inches * 2.54;
}

inchToCMTest();

function inchToMTest(){
  if (inchToM(1) == 0.0254){
    console.log("Test passed :D ");
  } else {
    console.error("Test failed :C");
  }
}
function inchToM(inches){
  return inches * 0.0254;
}

inchToMTest()

function inchToMicrometer(inches){
  return inches * 25400;
}


function inchToNanometer(inches){
  return inches * 2.54e+7;
}
function inchToNanometerTest(){
  if (inchToNanometer(1) == 2.54e+7){
    console.log("Test passed :D ");
  } else {
    console.error("Test failed :C");
  }
}


const processArguments = process.argv;
const inches = parseFloat(processArguments[2]);
const output = processArguments[3].toLowerCase();

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
  } else {
    console.log("xxPlease enter a valid output unit");
    return null;
  }
}



const result = convertInches(inches,output);

if (result !== null){
  console.log(result);
} 

inchToNanometerTest();

export { convertInches, inchToMM, inchToCM, inchToM, inchToMicrometer, inchToNanometer };