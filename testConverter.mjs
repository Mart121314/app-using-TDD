import { test } from "./testest.mjs";
import { convertInches, inchToMM, inchToCM, inchToM, inchToMicrometer, inchToNanometer } from "../convert.mjs";

test(() => {
    convertInches();
    return true;
  }, "Converting number from inches");
  
  test(() => {
    return typeof convertInches() === "number";
  }, "converting number from inches ");
  
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