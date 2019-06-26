// You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

// Note that zero is an even number. If you have an empty array, you need to return it.

// For example:

// [5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

// odd numbers ascending:   [1, 3,       5   ]
// even numbers descending: [      8, 4,    2]

function sortArray(arr) {
    let evens = [];
    let evenIndexes = [];
    for (var i = 0; i < arr.length; i++) {
        if (! (arr[i] % 2)) {
            evens.push(arr[i]);
            evenIndexes.push(i);
        }
    }
    let result1 = evens.sort((a,b)=>b-a).map((n,i)=> n=[n,evenIndexes[i]]);
    let odds = [];
    let oddIndexes = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            odds.push(arr[i]);
            oddIndexes.push(i);
        }
    }
    let result2 = odds.sort((a,b)=>a-b).map((n,i)=> n=[n,oddIndexes[i]])
    let newArray = result1.concat(result2).sort((a,b)=>a[1]-b[1]).map(a=>a=a[0]);
    return newArray;
}
