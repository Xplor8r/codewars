// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

let maxSequence = function(a){
  if (a.length === 0 || Math.max(...a) < 0) return 0;
  let max = -1000000;
  let left = 0;
  let right = a.length - 1;
  let len = a.length;
  for (var i = 0; i < len; i++) {
    for (var j = i; j < len; j++) {
      let maxSum = 0;
      for (var k = i; k <= j; k++) {
        maxSum += a[k];
        if (max < maxSum) {
          left = i;
          max = maxSum;
          right = j;
        }
      }
    }
  }
  return max;
}
