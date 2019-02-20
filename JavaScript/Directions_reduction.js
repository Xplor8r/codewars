function dirReduc(arr){
  let lat = ["NORTH", "SOUTH"];
  let long = ["EAST", "WEST"];
  let left = 0;
  let right = 1;
  while (right < (arr.length)) {
    let l = arr[left];
    let r = arr[right];
    if ((l === lat[0] && r === lat[1]) || (l === lat[1] && r === lat[0]) || (l === long[0] && r === long[1]) || (l === long[1] && r === long[0])) {
      arr.splice(left, 2);
      left = 0;
      right = 1;
    } else {
      left ++;
      right = left + 1;
    }
  }
  return arr;
}
