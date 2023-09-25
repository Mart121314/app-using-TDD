import { test } from "./testest.mjs";
import { convertInches, inchToMM } from "./convert.mjs";


test(() => {
    const inches = 10;
    const output = "mm";
    return convertInches(inches, output);
  }, "Converting number from inches :D ");
  
  test(() => {
    const inches = 5; 
    const output = "mm";
    return convertInches(inches, output);
  }, "converting number from inches :)");
  
  function test_doesFunctionReturnValuesBetween() {
    const min = 0;
    const max = 254;
  
    for (let i = 0; i < 10000; i++) {
      const inches = Math.random() * 10;
      const result = inchToMM(inches);
      if (result > max || result < min) {
        return false;
      }
    }
  
    return true;
  }
  
  test(test_doesFunctionReturnValuesBetween, "Values fall within limits");