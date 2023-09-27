import { test } from "./testest.mjs";
import { convertInches, inchToMM,inchToCM, inchToM, inchToMicrometer, inchToNanometer } from "./convert.mjs";


  wwwwwww
  function test_doesFunctionReturnValuesBetween() {
    const min = 0;
    const max = 25.4;
  
    for (let i = 0; i < 10000; i++) {
      const inches = Math.random() * 10;
      const result = inchToMM(inches);
      if (result > max || result < min) {
        return false;
      }
    } 
    return true;
  };


  function testConversionFunctions() {
    const testAll = [
      { inches: 1, output: "-mm", expected: 25.4 },
      { inches: 1, output: "-cm", expected: 2.54 },
      { inches: 1, output: "-m", expected: 0.0254 },
      { inches: 1, output: "-micrometer", expected: 25400 },
      { inches: 1, output: "-nanometer", expected: 2.54e+7 },
    ];
  
    for (const test of testAll) {
      const result = convertInches(test.inches, test.output);
      console.log(`Conversion test result for ${test.inches} inches to ${test.output} is ${result}`);
    }
  }

  function inchToMMTest() {
    if (inchToMM(1) == 25.4){
      console.log("Test passed");
    } else {
      console.error("Test failed");
    }
    }

    
function inchToCMTest(){
    if (inchToCM(1) == 2.54){
        console.log("Test passed :)");
    } else {
        console.error("Test failed :(");
    }
    }



    
function inchToMTest(){
if (inchToM(1) == 0.0254){ 
     console.log("Test passed :D ");
    } else {
     console.error("Test failed :C");
    }
    }

    function inchToNanometerTest(){
        if (inchToNanometer(1) == 2.54e+7){
          console.log("Test passed :D ");
        } else {
          console.error("Test failed :C");
        }
      }

      function inchToMicrometerTest(){
        if (inchToMicrometer(1) == 2.54e+7){
          console.log("Test passed :D ");
        } else {
          console.error("Test failed :C");
        }
      }


inchToMTest()
inchToCMTest();
inchToMMTest();
inchToMicrometerTest();
inchToNanometerTest();
test(test_doesFunctionReturnValuesBetween, "Values fall within limits");






/*test(() => {
    const inches = 10;
    const output = "-mm";
    return convertInches(inches, output);
  }, "Converting number from inches :D ");*/
  

  /*test(() => {
    for (let i = 0; i < 10000; i++){
        const result = inchToMM(i);
        const output = i * 25.5;
        if (result != output) {
            return false;
        }
    return true;
    }
  } , "Does function return correct value?");*/




/*const valuesInMetrics = {
    "-mm": 25.4,
    "-cm": 2.54,
    "-m": 0.0254,
    "-micrometer": 25400,
    "-nm": 2.54*10**6,
}*/

/*function test1() {
    for (let i = 0; i < 10000; i++) {
      for (const key in valuesInMetrics) {
        const inches = Math.random() * 10;
        const result = convertInches(inches, key);
        const output = inches * valuesInMetrics[key];
        if (result !== output) {
          return false;
        }
      }
    }
    return true;
  }*/


/* test(test1, "Does function return correct value?");*/

