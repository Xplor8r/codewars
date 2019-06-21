// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(numbers, target) {
  let withIndex = []
  numbers.forEach((x,i)=>withIndex.push([x,i]));
  let sorted = withIndex.sort((a,b)=>a[0]-b[0])
  let left = 0;
  let right = sorted.length - 1;
  while (left < right) {
    let sum = sorted[left][0] + sorted[right][0];
    if (sum === target) {
      return [sorted[left][1], sorted[right][1]];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}
