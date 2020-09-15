const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);


  }
};

const tail = (array) => {
  let tailedArray = [];
  for (let i = 1; i < array.length; i++) {
    tailedArray.push(array[i]);
  } return tailedArray;


};

// Test Case: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//Test Case: Check tail function does not modify original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//Test Case: Empty Array
const empt = tail([]);
assertEqual(empt[0], 3); // should fail

//Test Case: One Element Array
const oneElm = tail([1]);
assertEqual(oneElm[0], 1);// should fail

