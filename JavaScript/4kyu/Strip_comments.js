// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
  let lines = input.split("\n");
  let result = [];
  for (let i = 0; i < lines.length; i++) {
    let arr = lines[i].split('');
    for (let j = 0; j < arr.length; j++) {
      if (markers.includes(arr[j])) {
        arr = arr.slice(0,j);
      }
    }
    result.push(arr.join('').trim());
  }
  return result.join("\n");
};
