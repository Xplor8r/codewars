function matrixAddition(a, b){
  let arr1 = [];
    for (let i = 0; i < a.length; i++) {
      let arr2 = [];
      for (let j = 0; j < a[i].length; j++) {
        arr2.push(a[i][j] + b[i][j]);
      }
      arr1.push(arr2);
    }
  return arr1
}
