// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  for(let i = 0; i < array.length; i++) {
    let lowest = i;
    for(let j = i + 1; j < array.length; j++) {
      let val = array[j]
      let low = array[lowest]
      if(val < low && low % 2 !== 0 && val % 2 !== 0) {
        lowest = j
      }
    }
    if(i !== lowest) {
      let temp = array[i];
      array[i] = array[lowest];
      array[lowest] = temp;
    }
  }
  return array;
}
