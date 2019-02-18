function digital_root(n) {
    let array = n.toString().split('')
    let sum1 = 0;
    for (i = 0; i < array.length; i++) {
      sum1 += parseFloat(array[i]);
    }
    if (sum1.toString().length > 1) {
      let sum2 = 0;
      let array2 = sum1.toString().split('')
      for (i = 0; i < array2.length; i++) {
        sum2 += parseFloat(array2[i]);
      }
      return sum2;
    }
    return sum1;
}