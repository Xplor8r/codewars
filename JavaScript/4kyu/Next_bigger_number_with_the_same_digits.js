// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n){
  let arr = n.toString().split('').map(a=>parseInt(a));
  let swaps;
  for(var i = arr.length - 1; i > 0; i--){
    let j = i - 1;
    if (arr[j] < arr[i]) {
      swaps = true;
      let newArr = arr.map((n,idx)=>n=[n,idx]).slice(j+1);
      let swapper = newArr.sort((a,b)=>a[0]-b[0]).find(x=>x[0]>arr[j]);
      var temp = arr[j];
      arr[j] = arr[swapper[1]];
      arr[swapper[1]] = temp;
      arr = arr.slice(0, j+1).concat(arr.slice(j+1).sort());
      return parseInt(arr.join(''));
    }
    if(swaps) break;
  }
  return -1;
}
